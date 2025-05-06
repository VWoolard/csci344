import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post
import flask_jwt_extended

from views import get_authorized_user_ids


class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def get(self):
        # TODO: Add GET Logic...

        # [3, 7, 8, 10, 12]
        bookmarks = Bookmark.query.filter(Bookmark.user_id == self.current_user.id)

        # TODO: add the ability to handle the "limit" query parameter:

        data = [item.to_dict() for item in bookmarks.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)

        # return Response(
        #     json.dumps([]),
        #     mimetype="application/json",
        #     status=200,
        # )

    @flask_jwt_extended.jwt_required()
    def post(self):
        # TODO: Add POST Logic...
        post_id = request.json.get('post_id')
        user_id = self.current_user.id

        try:
            post_id = int(post_id)
        except:
             #user passed a string into the limit parameter
             return Response(json.dumps({"message":"post_id must be an integer"}), mimetype="application/json", status=400)

        bookmark = Bookmark.query.filter(Bookmark.post_id == post_id, Bookmark.user_id == self.current_user.id).first()

        if post_id is None:
            return Response(json.dumps({"message": "post_id is a required field"}), mimetype="application/json", status=404)
        post = Post.query.get(post_id)
        if post is None:
            return Response(
                json.dumps({"Message": f"Post id={id} not found"}),
                mimetype="application/json",
                status=404,
            )
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        if post.user_id not in ids_for_me_and_my_friends:
            return Response(json.dumps({"message": "you are not allowed to bookmark this post"}), mimetype="application/json", status=404)
        if bookmark is not None:
            return Response(json.dumps({"message": "this post has already been bookmarked"}), mimetype="application/json", status=400)
        # return Response(
        #     json.dumps({}),
        #     mimetype="application/json",
        #     status=201,
        # )

        new_bookmark = Bookmark(user_id = user_id, post_id = post_id)
        db.session.add(new_bookmark)
        db.session.commit()
        db.session.refresh(new_bookmark)
        print(new_bookmark)

        return Response(json.dumps(new_bookmark.to_dict()), mimetype="application/json", status=201)


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        # TODO: Add Delete Logic...

        bookmark = Bookmark.query.get(id)
        if bookmark is None:
            return Response(
                json.dumps({"Message": f"Bookmark id={id} not found"}),
                mimetype="application/json",
                status=404,
            )
        if bookmark.user_id != self.current_user.id:
            return Response(
                json.dumps({"Message": f"You are not allowed to delete bookmark id={id}"}),
                mimetype="application/json",
                status=404,
            )
        
        Bookmark.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps({"Message": f"Bookmark id={id} has been successfully deleted."}),
            mimetype="application/json",
            status=200,
        )

        # print(id)
        # return Response(
        #     json.dumps({}),
        #     mimetype="application/json",
        #     status=200,
        # )


def initialize_routes(api, current_user):
    api.add_resource(
        BookmarksListEndpoint,
        "/api/bookmarks",
        "/api/bookmarks/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        BookmarkDetailEndpoint,
        "/api/bookmarks/<int:id>",
        "/api/bookmarks/<int:id>",
        resource_class_kwargs={"current_user": current_user},
    )

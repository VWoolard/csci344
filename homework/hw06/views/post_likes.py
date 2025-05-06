import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.like_post import LikePost
from models.post import Post
import flask_jwt_extended

from views import get_authorized_user_ids

class PostLikesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def post(self):
        # TODO: Add POST logic...

        post_id = request.json.get('post_id')
        user_id = self.current_user.id

        try:
            post_id = int(post_id)
        except:
             #user passed a string into the limit parameter
             return Response(json.dumps({"message":"post_id must be an integer"}), mimetype="application/json", status=400)

        like = LikePost.query.filter(LikePost.post_id == post_id, LikePost.user_id == self.current_user.id).first()

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
            return Response(json.dumps({"message": "you are not allowed to like this post"}), mimetype="application/json", status=404)
        if like is not None:
            return Response(json.dumps({"message": "this post has already been liked"}), mimetype="application/json", status=400)
        # return Response(
        #     json.dumps({}),
        #     mimetype="application/json",
        #     status=201,
        # )

        new_like = LikePost(user_id = user_id, post_id = post_id)
        db.session.add(new_like)
        db.session.commit()
        db.session.refresh(new_like)
        print(new_like)

        return Response(json.dumps(new_like.to_dict()), mimetype="application/json", status=201)

        # return Response(
        #     json.dumps({}),
        #     mimetype="application/json",
        #     status=201,
        # )


class PostLikesDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    @flask_jwt_extended.jwt_required()
    def delete(self, id):
        # TODO: Add DELETE logic...


        like = LikePost.query.get(id)
        if like is None:
            return Response(
                json.dumps({"Message": f"Like id={id} not found"}),
                mimetype="application/json",
                status=404,
            )
        if like.user_id != self.current_user.id:
            return Response(
                json.dumps({"Message": f"You are not allowed to delete like id={id}"}),
                mimetype="application/json",
                status=404,
            )
        
        LikePost.query.filter_by(id=id).delete()
        db.session.commit()

        return Response(
            json.dumps({"Message": f"Like id={id} has been successfully deleted."}),
            mimetype="application/json",
            status=200,
        )

        # return Response(
        #     json.dumps({}),
        #     mimetype="application/json",
        #     status=200,
        # )


def initialize_routes(api, current_user):
    api.add_resource(
        PostLikesListEndpoint,
        "/api/likes",
        "/api/likes/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        PostLikesDetailEndpoint,
        "/api/likes/<int:id>",
        "/api/likes/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )

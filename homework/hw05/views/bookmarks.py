import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark

from views import get_authorized_user_ids


class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):
        # TODO: Add GET Logic...
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        # [3, 7, 8, 10, 12]
        bookmarks = Bookmark.query.filter(Bookmark.user_id.in_(ids_for_me_and_my_friends))

        # TODO: add the ability to handle the "limit" query parameter:

        data = [item.to_dict() for item in bookmarks.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)

        # return Response(
        #     json.dumps([]),
        #     mimetype="application/json",
        #     status=200,
        # )

    def post(self):
        # TODO: Add POST Logic...
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=201,
        )


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # TODO: Add Delete Logic...
        print(id)
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )


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

import json

from flask import Response, request
from flask_restful import Resource

from models.story import Story
from views import get_authorized_user_ids


class StoriesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):
        # TODO: Add GET Logic...


        # count=request.args.get("limit")
        # if count is None:
        #     count = 20
        # try:
        #     count = int(count)
        # except:
        #      #user passed a string into the limit parameter
        #      return Response(json.dumps({"message":"limit must be an integer"}), mimetype="application/json", status=400)

        # if count > 50:
        #    return Response(json.dumps({"message":"max number of posts is 50"}), mimetype="application/json", status=400)
        

        # giving you the beginnings of this code (as this one is a little tricky for beginners):
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        # [3, 7, 8, 10, 12]
        stories = Story.query.filter(Story.user_id.in_(ids_for_me_and_my_friends))

        # TODO: add the ability to handle the "limit" query parameter:

        data = [item.to_dict() for item in stories.all()]
        return Response(json.dumps(data), mimetype="application/json", status=200)

        # return Response(
        #     json.dumps([]),
        #     mimetype="application/json",
        #     status=200,
        # )


def initialize_routes(api, current_user):
    api.add_resource(
        StoriesListEndpoint,
        "/api/stories",
        "/api/stories/",
        resource_class_kwargs={"current_user": current_user},
    )

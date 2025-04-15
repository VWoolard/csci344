import React, {useState} from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";


export default function Like({ token, likeId, postId }) {
    const [stateLikeId, setStateLikeId] = useState(likeId);

    async function createLike() {
        const sendData= {
                    post_id: postId,
                };
                console.log("creating a like...")
                const responseData= await postDataToServer(token, "/api/likes/", sendData);
                console.log(responseData);
                setStateLikeId(responseData.id);
        }

    async function deleteLike() {
         const url = '/api/likes/' + stateLikeId;
              console.log("deleting a like...")
              const responseData= await deleteDataFromServer(token, url);
              console.log(responseData);
              setStateLikeId(null);
      
      }

    if (stateLikeId) {
        return <button onClick={deleteLike}>
            <i className="fas text-red-500 fa-heart" aria-label="deletelike" aria-checked="false" role="switch">
                </i></button>
    } else {
        return <button onClick={createLike}>
            <i className="far fa-heart" aria-label="createlike" aria-checked="true" role="switch"></i>
            </button>
    }
}
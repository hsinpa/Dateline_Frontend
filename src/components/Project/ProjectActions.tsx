import {TaskIssueType, ProjectType} from "./ProjectReducer";
import {Dispatch} from "redux";

export const FETCH_POST = "FETCH_POST";

// export function fetchPost() {

//     return (dispatch : Dispatch) => {
//         console.log("fetchPost");

//         return fetch("./dataset/fake_tasks.json")
//         .then(res => res.json())
//         .then(posts => {

//             console.log(posts);

//             dispatch({
//                 type : FETCH_POST,
//                 payload : posts
//             })

//         });
//     }
// }

export const fetchPost = (dispatch : Dispatch) => {
    try {
        fetch("./dataset/fake_tasks.json")
        .then(res => res.json())
        .then(posts => {

            console.log(posts);

            dispatch({
                type : FETCH_POST,
                payload : posts
            })
        });

    } catch (error) {
      console.error(error);
    }
  }

interface GetProjectActionType {
    type: string,
    payload: ProjectType
}

export type ProjectActionType = GetProjectActionType;
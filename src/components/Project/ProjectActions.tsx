import {TaskIssueType, ProjectType} from "./ProjectReducer";
import {Dispatch} from "redux";

export const FETCH_POST = "FETCH_POST";
export const SET_TASK_ISSUE = "SET_TASK_ISSUE";

export const setTaskIssues = (dispatch : Dispatch, tasks: TaskIssueType[]) => {
    dispatch({
        type : SET_TASK_ISSUE,
        payload : tasks
    });
}

export const fetchPost = (dispatch : Dispatch) => {
    try {
        fetch("./dataset/fake_tasks.json")
        .then(res => res.json())
        .then(posts => {

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
    payload: ProjectType[]
}

interface GetTaskIssueActionType {
    type: string,
    payload: TaskIssueType[]
}

export type ProjectActionType = GetProjectActionType;
export type TaskIssueActionType = GetTaskIssueActionType;
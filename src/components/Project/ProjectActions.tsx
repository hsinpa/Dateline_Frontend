import {Dispatch} from "redux";
import {ProjectType, TaskIssueType} from '../../utility/TypeFlag'
import {ActionFlag} from "../../utility/EventFlag";

export const setTaskIssues = (dispatch : Dispatch, tasks: TaskIssueType[]) => {
    dispatch({
        type : ActionFlag.SET_CURRENT_TASK,
        payload : tasks
    });
}

export const setCurrentTask = (dispatch : Dispatch, task : TaskIssueType) => {
    dispatch({
        type : ActionFlag.SET_CURRENT_TASK,
        payload : task
    })
  }

  export const addNewActivity = (dispatch : Dispatch, task : TaskIssueType) => {

    dispatch({
        type : ActionFlag.ADD_ACTIVITY,
        payload : task
    })
  }

 
export const setCurrentProject = (dispatch : Dispatch, task : ProjectType) => {
    dispatch({
        type : ActionFlag.SET_CURRENT_PROJECT,
        payload : task
    })
  } 

export const fetchPost = (dispatch : Dispatch, type: string, url : string) => {
    try {
        //fetch("./dataset/fake_tasks.json")

        fetch(url)
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type : type,
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

interface SetTaskDetailActionType {
    type: string,
    payload: TaskIssueType
}

export type ProjectActionType = GetProjectActionType;
export type TaskIssueActionType = GetTaskIssueActionType;
export type TaskDetailActionType = SetTaskDetailActionType;
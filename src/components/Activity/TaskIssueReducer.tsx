import {TaskIssueType} from "../Project/ProjectReducer";
import {TaskIssueActionType, TaskDetailActionType, SET_TASK_ISSUE, ADD_ACTIVITY} from "../Project/ProjectActions";

const initialState : TaskIssueType[] = [];

export function TaskIssueReducer(state = initialState, action : TaskIssueActionType) : TaskIssueType[] {

    switch (action.type) {
        case SET_TASK_ISSUE:
          console.log(action.payload);


          return action.payload;

    }

    return state;
}
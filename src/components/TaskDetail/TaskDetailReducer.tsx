import {TaskIssueType} from "../Project/ProjectReducer";
import {SET_CURRENT_TASK, TaskDetailActionType} from "../Project/ProjectActions";

const initialState : TaskIssueType = null;

export function TaskDetailReducer(state = initialState, action : TaskDetailActionType ) : TaskIssueType {
    switch (action.type) {
        case SET_CURRENT_TASK:
          return action.payload;
    }

    return state;
}
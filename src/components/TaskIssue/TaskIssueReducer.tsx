import {TaskIssueType} from "../Project/ProjectReducer";
import {TaskIssueActionType, SET_TASK_ISSUE} from "../Project/ProjectActions";

const initialState : TaskIssueType[] = [];

export function TaskIssueReducer(state = initialState, action : TaskIssueActionType ) : TaskIssueType[] {

    switch (action.type) {
        case SET_TASK_ISSUE:
          return [...action.payload];
    }

    return state;
}
import {TaskIssueActionType, TaskDetailActionType} from "../Project/ProjectActions";
import {ActionFlag} from "../../utility/EventFlag";
import { TaskIssueType} from '../../utility/TypeFlag'

const initialState : TaskIssueType[] = [];

export function TaskIssueReducer(state = initialState, action : TaskIssueActionType) : TaskIssueType[] {

    switch (action.type) {
        case ActionFlag.SET_TASK_ISSUE:
          console.log(action.payload);


          return action.payload;

    }

    return state;
}
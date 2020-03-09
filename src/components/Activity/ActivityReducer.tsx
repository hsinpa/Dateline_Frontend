import {TaskDetailActionType} from "../Project/ProjectActions";
import {ActionFlag} from "../../utility/EventFlag";
import {TaskIssueType} from '../../utility/TypeFlag'

const initialState : TaskIssueType[] = [];

export function ActivityEditReducer(state = initialState, action : TaskDetailActionType ) : TaskIssueType[] {

    switch (action.type) {
        case ActionFlag.ADD_ACTIVITY:
             return  [...state ,action.payload ];     
    }

    return state;
}
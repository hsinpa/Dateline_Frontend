import {TaskIssueType} from "../Project/ProjectReducer";
import {TaskDetailActionType, ADD_ACTIVITY} from "../Project/ProjectActions";

const initialState : TaskIssueType[] = [];

export function ActivityEditReducer(state = initialState, action : TaskDetailActionType ) : TaskIssueType[] {

    switch (action.type) {
        case ADD_ACTIVITY:
             return  [...state ,action.payload ];     
    }

    return state;
}
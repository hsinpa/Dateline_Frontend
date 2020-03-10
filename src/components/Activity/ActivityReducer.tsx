import {TaskDetailActionType} from "../Project/ProjectActions";
import {ActionFlag} from "../../utility/EventFlag";
import {ActivityType} from '../../utility/TypeFlag'

export interface ActivityStructure {
    activities : ActivityType[],
    selected_activity : ActivityType
};

const initialState : ActivityStructure = {
    activities : [],
    selected_activity : null
};

export function ActivityReducer(state = initialState, action : any ) : ActivityStructure {
    switch (action.type) {
        case ActionFlag.FETCH_ACTIVITY:
            return {...state, activities :action.payload }

        case ActionFlag.SET_SELECTED_ACTIVITY:
            return {...state, selected_activity :action.payload }
    
        case ActionFlag.ADD_ACTIVITY:
             return {...state, activities :[...state.activities, action.payload] }
    }
    return state;
}
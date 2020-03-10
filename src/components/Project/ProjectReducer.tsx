import * as pAction from "./ProjectActions";
import {ActionFlag} from "../../utility/EventFlag";
import {ProjectType} from '../../utility/TypeFlag'


export interface ProjectStructure {
    projects : ProjectType[],
    selected_project : ProjectType
};

const initialState : ProjectStructure = {
    projects : [],
    selected_project : null
};

export function ProjectReducer(state = initialState, action : any ) : ProjectStructure {

    switch (action.type) {
        case ActionFlag.FETCH_PROEJCT:
          return {
            ...state,
            projects: action.payload
          };

        case ActionFlag.SET_CURRENT_PROJECT:
            return {
                ...state,
                selected_project: action.payload
              };
    }

    return state;
}
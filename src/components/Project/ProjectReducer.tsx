import * as pAction from "./ProjectActions";
import { ADD_ACTIVITY} from "../Project/ProjectActions";

export interface TaskIssueType {
    id : string,
    name : string,
    description : string,
    layer : number,
    issue_person? : string,
    deadline? : string,
    accomplish_percentage? : number,
    weight? : number,
    expands? : TaskIssueType[]
};

export interface ProjectType {
    id : string,
    name : string
};

export interface PackageType {
    id : string,
    name : string
    manager : string
};

export interface ActivityType {
    id : string,
    package_id : string,
    project_id : string,
    name : string,
    description : string,
    priority : number,
    assignee : string,
    issue_date : string,
    dependency_id : string,
};

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
        case pAction.FETCH_POST:
          return {
            ...state,
            projects: action.payload
          };

          case ADD_ACTIVITY:
            // if (state.length > 0) {
            //     let newProject = [...state];
            //     newProject[0].task_issues = [...newProject[0].task_issues ,action.payload ];
            //     console.log(newProject);
            //     return  newProject;
            // }
        break;
    }

    return state;
}
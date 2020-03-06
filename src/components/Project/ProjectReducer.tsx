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
    name : string,
    task_issues : TaskIssueType[]
};

const initialState : ProjectType[] = [];

export function ProjectReducer(state = initialState, action : any ) : ProjectType[] {

    switch (action.type) {
        case pAction.FETCH_POST:
          return action.payload;

          case ADD_ACTIVITY:
            if (state.length > 0) {
                let newProject = [...state];
                newProject[0].task_issues = [...newProject[0].task_issues ,action.payload ];
                console.log(newProject);
                return  newProject;
            }
        break;
    }

    return state;
}
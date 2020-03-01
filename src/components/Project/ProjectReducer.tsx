import * as pAction from "./ProjectActions";

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

export function ProjectReducer(state = initialState, action : pAction.ProjectActionType ) : ProjectType[] {

    switch (action.type) {
        case pAction.FETCH_POST:
          return action.payload;
    }

    return state;
}
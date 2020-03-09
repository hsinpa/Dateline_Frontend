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
    project_id : string,
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

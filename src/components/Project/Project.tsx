import * as React from "react";
import ProjectBox from "./ProjectBox";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType} from "./ProjectReducer";

import {fetchPost,setTaskIssues} from "./ProjectActions";
import ProjectTask from "../TaskIssue/ProjectTask";


import {Dispatch} from "redux";

import {connect, ConnectedProps } from 'react-redux';

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (fetchPost(dispatch)),
        setTaskIssues : (task : TaskIssueType[]) => (setTaskIssues(dispatch, task))
    }
}

const mapState = (state: RooterReducerType) => ({
    projects: state.projects,
    task : state.taskIssues
});

const connector = connect(
    mapState,
    mapDispatch
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Project extends React.Component<PropsFromRedux> {

    CreateProjectBox(project : ProjectType[]) {
        let boxs = [];

        let projectNum = project.length;

        for (let i = 0; i < projectNum; i++) {
            let titleName = "Project name " + (project[i].name);
            boxs.push(<ProjectBox title={titleName} />);
        }

        if (projectNum > 0) {
            this.props.setTaskIssues(project[0].task_issues);
        }

        return boxs;
    }

    CreateTaskIssue(tasks : TaskIssueType[]) : JSX.Element[]{
        let issue_list : JSX.Element[] = [];
        let taskLength = tasks.length;

        if (taskLength <= 0) {
            issue_list.push(<p>No Task is assign to anyone</p>);
            return issue_list;
        }

        for (let i = 0; i < taskLength; i++) {
            let layerType = (tasks[i].layer === 0) ? 0 : 1;
            let taskClassName = "columns task_list_layer_" + layerType;

            issue_list.push(<li className={taskClassName}>
                <p className="column triangle-topleft">02/2020 AB</p>
                <p className="column is-three-fifths">{tasks[i].name}</p>
                <p className="column">70% A</p>

            </li>);

            if (tasks[i].expands.length > 0) {
                let dependentTask = this.CreateTaskIssue(tasks[i].expands);
                issue_list = issue_list.concat(dependentTask);    
            }
        }
        
        return issue_list;
    }

    componentWillMount() {
        this.props.fetchData();

    }
    
    render() {
        return <div>
            <div className="container" id="project_main" >
                {this.CreateProjectBox(this.props.projects)}
            </div>
        
            <div className="container" id="task_main">
                <ul>
                    {this.CreateTaskIssue(this.props.task)}
                </ul>
            </div>
        
        </div>
        ;
    }
}

export default connector(Project)
import * as React from "react";
import ProjectBox from "./ProjectBox";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType} from "./ProjectReducer";

import {fetchPost,setTaskIssues} from "./ProjectActions";
import ProjectTask from "../Activity/ProjectTask";
import CreateActModal from "../Activity/CreateActModal";

import TaskDetail from "../TaskDetail/TaskDetail";


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

    componentWillMount() {
        this.props.fetchData();

    }
    
    render() {
        return <div>
                <CreateActModal />

                <div className="container">
                    <div className="columns">
                        <div id="project_main"  className="column ">
                            {this.CreateProjectBox(this.props.projects)}
                        </div>

                        <div className="column is-four-fifths">
                            <ul>
                                <ProjectTask/>
                            </ul>
                        </div>
                
                        <div className="column">
                            <TaskDetail/>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default connector(Project)
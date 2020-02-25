import * as React from "react";
import ProjectBox from "./ProjectBox";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType} from "./ProjectReducer";

import {fetchPost,setTaskIssues} from "./ProjectActions";
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

        console.log(this.props.projects);

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
            <div className="container" id="project_main" >
                {this.CreateProjectBox(this.props.projects)}
            </div>
        
            <div className="container" id="task_main">
                <ul>
                    <li>Hello world</li>
                </ul>
            </div>
        
        </div>
        ;
    }
}

export default connector(Project)
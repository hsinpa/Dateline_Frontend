
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";

import {setTaskIssues} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

export interface ProjectTaskType { task: TaskIssueType }

// const mapDispatch = (dispatch : Dispatch) => {
//     return {
//         fetchData : () => (setTaskIssues(dispatch))
//     }
// }

// const mapState = (state: RooterReducerType) => ({
//     projects: state.projects
// });

const connector = connect(
    null,
    null
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector> | ProjectTaskType
  
class ProjectTask extends React.Component<PropsFromRedux> {

    componentWillMount() {

    }
    
    render() {
        return <div>
        
        </div>
    }
}

export default connector(ProjectTask)
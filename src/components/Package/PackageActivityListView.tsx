
import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType} from '../../utility/TypeFlag'
import {getAllPackage} from './PackageActions'

import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

export interface ProjectTaskType { task: TaskIssueType }

type TaskProps = {
    task: TaskIssueType,
}
  
const mapState = (state: RooterReducerType) => ({
    selectedProject: state.project_structure.selected_project
});

const mapDispatch = (dispatch : Dispatch) => {
    return {
        getAllPackage : (project : ProjectType) => (getAllPackage(dispatch, project)),
    }
}

const connector = connect(
    mapState,
    mapDispatch
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
  
class PackageListView extends React.Component<PropsFromRedux> {

    ShowTaskList(project : ProjectType ) {
        if (project == null) return '';

        this.props.getAllPackage(project);
    }
    
    render() {
        return <div id="package_list_panel">
            {
                this.ShowTaskList(this.props.selectedProject)
            }
        </div>
    }
}

export default connector(PackageListView)
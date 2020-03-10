
import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType} from '../../utility/TypeFlag'
import {getAllPackage} from './PackageActions'
import {getAllActivity, setOnClickActivity} from '../Activity/ActivityActions'

import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

export interface ProjectTaskType { task: TaskIssueType }

type TaskProps = {
    task: TaskIssueType,
}
  
const mapState = (state: RooterReducerType) => ({
    selectedProject: state.project_structure.selected_project,
    package_structure : state.packages_structure,
    activity_structure : state.activity_structure,
});

const mapDispatch = (dispatch : Dispatch) => {
    return {
        getAllPackage : (project : ProjectType) => (getAllPackage(dispatch, project)),
        getAllActivity : (project : ProjectType) => (getAllActivity(dispatch, project)),
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

        console.log(this.props.selectedProject);

        if (project == null) return '';
    }

    componentDidUpdate(prop : PropsFromRedux){
        if (this.props.selectedProject == null) return;

        if (this.props.package_structure.packages.length == 0) {
            this.props.getAllPackage(this.props.selectedProject);
        }

        if (this.props.activity_structure.activities.length == 0) {
            this.props.getAllActivity(this.props.selectedProject);
        }

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
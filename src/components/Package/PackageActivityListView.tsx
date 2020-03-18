
import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, PackageType, ActivityType} from '../../utility/TypeFlag'
import {getAllPackage} from './PackageActions'
import {getAllActivity, setOnClickActivity} from '../Activity/ActivityActions'

import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

import ActivityUtility from '../Activity/AcitivityUtility';

const mapState = (state: RooterReducerType) => ({
    selectedProject: state.project_structure.selected_project,
    package_structure : state.packages_structure,
    activity_structure : state.activity_structure,
});

const mapDispatch = (dispatch : Dispatch) => {
    return {
        getAllPackage : (project : ProjectType) => (getAllPackage(dispatch, project)),
        getAllActivity : (project : ProjectType) => (getAllActivity(dispatch, project)),
        setOnClickActivity : (activity : ActivityType) => (setOnClickActivity(dispatch, activity)),
    }
}

const connector = connect(
    mapState,
    mapDispatch
);

declare module 'react' {
    interface HTMLAttributes<T> {
        activity_id?: string
    }
}

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
  
class PackageListView extends React.Component<PropsFromRedux> {

    activityUti : ActivityUtility = null; 

    constructor(props: PropsFromRedux) {
        super(props);
        this.ListDomOnclick = this.ListDomOnclick.bind(this);
        this.activityUti = new ActivityUtility();
      }

    ShowTaskList(packages : PackageType[] ) : JSX.Element[] {
        let task_list : JSX.Element[] = [];

        if (packages == null && packages.length > 0) return task_list;
        let packageLength = this.props.package_structure.packages.length;

        for (let i = 0; i < packageLength; i++) {
            let pack : PackageType = this.props.package_structure.packages[i];
            let filActList = this.activityUti.GetAcitivityFilterByPackageID(pack.id);
            //let totalWeight = this.activityUti.GetTotalActivityWeight(filActList);

            //Generate Package Row
            task_list.push(this.CreatePackageRow(pack, 100));

            //Generate Activity Row
            let actListLength = filActList.length;
            for (let k = 0; k < actListLength; k++) {
                task_list.push(this.CreateActivityRow(filActList[k]));
            }
        }

        return task_list;
    }

    CreatePackageRow(p_package : PackageType, completedWeight : number) : JSX.Element {

        console.log(p_package);

        let packageDom = <li className="package_row columns" >
        <div className="column"><p>{p_package.name}</p><p>{p_package.start_date} ~ {p_package.end_date}</p></div>
        <div className="column"><p>{p_package.manager}</p></div>
        </li>;
        
        return packageDom;
    }

    CreateActivityRow(p_activity : ActivityType) : JSX.Element {
        let activityDom = <li className="activity_row columns" activity_id={p_activity.id} onClick={this.ListDomOnclick}>
        <p className="column">{p_activity.name}</p>
        <p className="column">{p_activity.assignee}</p>
        <p className="column">P{p_activity.priority}, {p_activity.end_date}</p>
        </li>;
        
        return activityDom;
    }

    ListDomOnclick(e:React.MouseEvent) {
        e.preventDefault();
        let activityID = e.currentTarget.attributes.getNamedItem("activity_id").value;
        let selectedAct = this.props.activity_structure.activities.find(x=>x.id == activityID);
        if (selectedAct != null) {
            this.props.setOnClickActivity(selectedAct);
        }
    }

    componentDidUpdate(prop : PropsFromRedux){
        if (this.props.selectedProject == null) return;

        if (this.props.package_structure.packages.length == 0) {
            this.props.getAllPackage(this.props.selectedProject);
        }

        if (this.props.activity_structure.activities.length == 0) {
            this.props.getAllActivity(this.props.selectedProject);
        }
        
        this.activityUti.UpdateActivityList(this.props.activity_structure.activities);
    }
   
    render() {
        return <div id="package_list_panel">
            <ul>
            {
                this.ShowTaskList(this.props.package_structure.packages)
            }
            </ul>
        </div>
    }
}

export default connector(PackageListView)
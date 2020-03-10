import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType, TaskIssueType, PackageType, ActivityType} from '../../utility/TypeFlag'
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

const mapState = (state: RooterReducerType) => ({
    activity : state.activity_structure.selected_activity,
});

// const mapDispatch = (dispatch : Dispatch) => {
//     return {
//         getAllPackage : (project : ProjectType) => (getAllPackage(dispatch, project)),
//         getAllActivity : (project : ProjectType) => (getAllActivity(dispatch, project)),
//         setOnClickActivity : (activity : ActivityType) => (setOnClickActivity(dispatch, activity)),
//     }
// }

const connector = connect(
    mapState,
    null
);

type PropsFromRedux = ConnectedProps<typeof connector>

class ActivityDetailView extends React.Component<PropsFromRedux> {

    RenderView() : JSX.Element {
        if (this.props.activity == null) return <></>;
        let activity = this.props.activity;

        return <div className="activity_detail_view container">
                <h2>{activity.name}</h2>
                <p>{activity.assignee}</p>
                <p>P{activity.priority}, {activity.issue_date}</p>
                <p>{activity.description}</p>
                </div>
    }

    render() {
        return <div>
            { this.RenderView() }
            </div>;
    }
}
export default connector(ActivityDetailView);

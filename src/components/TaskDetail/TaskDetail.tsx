
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";

import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

export interface ProjectTaskType { task: TaskIssueType }

const mapDispatch = (dispatch : Dispatch) => {
    return {
    }
}

type TaskProps = {
    task: TaskIssueType,
}
  
const mapState = (state: RooterReducerType) => ({
    taskdetail: state.taskDetail
});

const connector = connect(
    mapState,
    null
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
  
class TaskDetail extends React.Component<PropsFromRedux> {

    ShowDetailPage(task : TaskIssueType) {
        if (this.props.taskdetail == null) return '';

        return <div className="detail_box">
            <p>Task ID : {task.id}
                Task name : {task.name}
            </p>

            <form>
                <textarea>Type any thing here</textarea>
                <input type="submit" value="Submit" />
            </form>
            </div>
    }

    componentWillMount() {

    }
    
    render() {
        return <div id="task_detail">
            { 
                this.ShowDetailPage(this.props.taskdetail)
            }

        </div>
    }
}

export default connector(TaskDetail)
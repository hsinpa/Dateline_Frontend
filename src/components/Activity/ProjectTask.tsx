
import { TaskIssueType} from '../../utility/TypeFlag'
import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';

const mapDispatch = (dispatch : Dispatch) => {
    return {
        setCurrentTask : (task : TaskIssueType) => (setCurrentTask(dispatch, task))
    }
}

const connector = connect(
    null,
    mapDispatch
);

declare module 'react' {
    interface HTMLAttributes<T> {
        data_task_id?: string
    }
}

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
  
class ProjectTask extends React.Component<PropsFromRedux> {
    flat_task_list : TaskIssueType[];

    constructor(props : PropsFromRedux) {
        super(props);
    
        this.ListDomOnclick = this.ListDomOnclick.bind(this);
        this.flat_task_list = [];
      }

    CreateTaskIssue(tasks : TaskIssueType[]) : JSX.Element[]{
        let issue_list : JSX.Element[] = [];
        let taskLength = tasks.length;

        if (taskLength <= 0) {
            issue_list.push(<p>No Task is assign to anyone</p>);
            return issue_list;
        }

        console.log(tasks);

        for (let i = 0; i < taskLength; i++) {
            let layerType = (tasks[i].layer === 0) ? 0 : 1;
            let taskClassName = "columns task_list_layer_" + layerType;

            issue_list.push(<li className={taskClassName} onClick={this.ListDomOnclick} data_task_id={tasks[i].id} >
                <p className="column triangle-topleft">{tasks[i].deadline}</p>
                <p className="column is-three-fifths">{tasks[i].name}</p>
                <p className="column">{tasks[i].accomplish_percentage +", " + tasks[i].issue_person} </p>

            </li>);

            if (tasks[i].expands.length > 0) {
                let dependentTask = this.CreateTaskIssue(tasks[i].expands);
                issue_list = issue_list.concat(dependentTask);    
            }

            this.flat_task_list.push(tasks[i]);
        }
        
        return issue_list;
    }

    ListDomOnclick(e:React.MouseEvent) {
        e.preventDefault();
        let taskID = e.currentTarget.attributes.getNamedItem("data_task_id").value;

        let selectedTask = this.flat_task_list.find(x=> x.id==taskID);
        if (selectedTask != null) {
            console.log(selectedTask.id);
            this.props.setCurrentTask(selectedTask);
        }
    }

    componentWillMount() {
        this.flat_task_list = [];
        console.log("componentWillMount");
    }
    
    render() {
        return <div id="task_main">
            {/* {this.CreateTaskIssue(this.props.taskIssues)} */}
        </div>
    }
}

export default connector(ProjectTask)
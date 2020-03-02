
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const mapDispatch = (dispatch : Dispatch) => {
    return {
    }
}

const mapState = (state: RooterReducerType) => ({
    taskIssues: state.taskIssues
});

const connector = connect(
    null,
    mapDispatch
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
  
class CreateActModal extends React.Component<PropsFromRedux> {

    date : Date;

    constructor(props : PropsFromRedux) {
        super(props);

        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.date = new Date();
    }

    onCalendarChange(date : Date) {
        this.date = date;
    }

    componentWillMount() {

    }
    
    render() {
        return <div id="create_activity_modal" className="modal">
            <button>X</button>
            <form className="container">
                <h1>Create Activity</h1>
                <label>Subject</label>
                <input></input>

                <label>Description</label>
                <input></input>

                <Datepicker selected={this.date} onChange={this.onCalendarChange}></Datepicker>

            </form>
        </div>
    }
}

export default connector(CreateActModal)
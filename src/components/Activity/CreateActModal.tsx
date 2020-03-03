
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import Datepicker from 'react-datepicker';
import * as ReactModal from 'react-modal';

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
    state = {
        showModal: true,
    };

    constructor(props : PropsFromRedux) {
        super(props);

        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);

        this.date = new Date();
    }

    onEditorChange(value : Node[]) {


    }

    onCalendarChange(date : Date) {
        this.date = date;
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    componentWillMount() {

    }
    
    render() {
        return <div>

            <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}>

            <form className="container">
                <h1>Create Activity</h1>
                <label>Subject</label>
                <input></input>
                <br/>
                <label>Description</label>
                <input></input>

                <br/>
                <textarea>Type your project description</textarea>

                <div className="columns">
                    <div className="column">
                        <label>Date issue</label>
                        <Datepicker selected={this.date} onChange={this.onCalendarChange}></Datepicker>
                        <br/>
                        <label>Priority</label>
                        <select id="priority">
                            <option value="0">P0</option>
                            <option value="1">P1</option>
                            <option value="2">P2</option>
                            <option value="3">P3</option>
                        </select>
                    </div>

                    <div className="column">
                        <label>Assignee</label>
                        <select id="assignee">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br/>

                        <label>Notify</label>
                        <select id="notify">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>  
                    </div>
    
                </div>

            </form>

            </ReactModal>
        </div>
    }
}

export default connector(CreateActModal)
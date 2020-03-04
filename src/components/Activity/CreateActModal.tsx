
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import Datepicker from 'react-date-picker';
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


type ModalState = {
    showModal: boolean,
    date : Date
}

class CreateActModal extends React.Component<PropsFromRedux, ModalState> {

    state = {
        showModal : true, date : new Date()
    }

    constructor(props : PropsFromRedux) {
        super(props);

        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
    }

    onEditorChange(value : Node[]) {


    }

    onCalendarChange(date : Date) {
        console.log(date);
        this.setState({date : date });
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

            <form className="container activity_modal">
                <h1>Create Activity</h1>
                <br/>
                <input className="input" placeholder="Subject"></input>
                <br/><br/>
                <label className="label">Description</label>
                <textarea className="textarea" placeholder="Type your project description"></textarea>
                <br/>

                <div className="columns">
                    <div className="column">
                        <label className="label">Date issue</label>
                        <Datepicker value={this.state.date} onChange={this.onCalendarChange}></Datepicker>
                        <br/>
                        <label className="label">Priority</label>
                        <select id="priority" className="select">
                            <option value="0">P0</option>
                            <option value="1">P1</option>
                            <option value="2">P2</option>
                            <option value="3">P3</option>
                            <option value="4">P4</option>

                        </select>
                    </div>

                    <div className="column">
                        <label className="label">Assignee</label>
                        <select id="assignee" className="select">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br/>

                        <label className="label">Notify</label>
                        <select id="notify" className="select">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>  
                    </div>
                </div>
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Choose a file…
                            </span>
                        </span>
                        <span className="file-name">
                            NoManSkysuck.png
                        </span>
                    </label>
                </div>

            <nav >
                <button className="button is-danger" onClick={this.handleCloseModal}>Close</button>
                <button className="button is-primary">Create</button>
            </nav>

            </form>

            </ReactModal>
        </div>
    }
}

export default connector(CreateActModal)
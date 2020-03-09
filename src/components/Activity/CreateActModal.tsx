
import { TaskIssueType} from '../../utility/TypeFlag'

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask, addNewActivity} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import Datepicker from 'react-date-picker';
import * as ReactModal from 'react-modal';

import {UtilityFunctions} from '../../utility/Utility';

const mapDispatch = (dispatch : Dispatch) => {
    return {
        addNewActivity :  (task : TaskIssueType) => (addNewActivity(dispatch, task)),
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
    date : Date,
    subject : string, description : string, priority :string, assignee: string, notify:string

}

class CreateActModal extends React.Component<PropsFromRedux, ModalState> {

    state = {
        showModal : false, date : new Date(),
        subject : "", description : "", priority :"0", assignee: "empty", notify:"empty"
    }

    constructor(props : PropsFromRedux) {
        super(props);

        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onNotifyChange = this.onNotifyChange.bind(this);
        this.onAssigneeChange = this.onAssigneeChange.bind(this);
        this.onPriorityChange = this.onPriorityChange.bind(this);
    }

    onFormSubmit(e: React.FormEvent ) {
        e.preventDefault();

        let sendTask : TaskIssueType = {
            name : this.state.subject,
            id : UtilityFunctions.GetRandomID(),
            description : this.state.description,
            deadline : this.state.date.toDateString(),
            expands : [],
            layer : 0
        };

        this.props.addNewActivity(sendTask);

        this.handleCloseModal();
    }

    onCalendarChange(date : Date) {
        console.log(date);
        this.setState({date : date });
    }

    onDescriptionChange(e : React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({description : e.currentTarget.value });

    }

    onSubjectChange(e : React.ChangeEvent<HTMLInputElement>) {
        this.setState({subject : e.currentTarget.value });

    }

    onNotifyChange(e : React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.currentTarget.value);
        this.setState({notify : e.currentTarget.value });

    }

    onAssigneeChange(e : React.ChangeEvent<HTMLSelectElement>) {
        this.setState({assignee : e.currentTarget.value });

    }
    
    onPriorityChange(e : React.ChangeEvent<HTMLSelectElement>) {
        this.setState({priority : e.currentTarget.value });

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

            <form className="container activity_modal" onSubmit={this.onFormSubmit}>
                <h1>Create Activity</h1>
                <br/>
                <input className="input" placeholder="Subject" value={this.state.subject} onInput={this.onSubjectChange}></input>
                <br/><br/>
                <label className="label">Description</label>
                <textarea className="textarea" placeholder="Type your project description" value={this.state.description} onInput={this.onDescriptionChange}></textarea>
                <br/>

                <div className="columns">
                    <div className="column">
                        <label className="label">Date issue</label>
                        <Datepicker value={this.state.date} onChange={this.onCalendarChange}></Datepicker>
                        <br/>
                        <label className="label">Priority</label>
                        <select id="priority" className="select" value={this.state.priority} onChange={this.onPriorityChange}>
                            <option value="0">P0</option>
                            <option value="1">P1</option>
                            <option value="2">P2</option>
                            <option value="3">P3</option>
                            <option value="4">P4</option>

                        </select>
                    </div>

                    <div className="column">
                        <label className="label">Assignee</label>
                        <select id="assignee" className="select" value={this.state.assignee} onChange={this.onAssigneeChange}>
                            <option value="empty">Please select one</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br/>

                        <label className="label">Notify</label>
                        <select id="notify" className="select" value={this.state.notify} onChange={this.onNotifyChange}>
                            <option value="empty">Please select one</option>
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

            <nav>
                <button className="button is-danger" onClick={this.handleCloseModal}>Close</button>
                <input type="submit" className="button is-primary" value="Create" ></input>
            </nav>
            </form>

            </ReactModal>
        </div>
    }
}

export default connector(CreateActModal)
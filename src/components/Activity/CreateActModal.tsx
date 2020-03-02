
import {TaskIssueType} from "../Project/ProjectReducer";

import * as React from "react";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {setCurrentTask} from "../Project/ProjectActions";
import {Dispatch} from "redux";
import {connect, ConnectedProps } from 'react-redux';
import Datepicker from 'react-datepicker';
import * as ReactModal from 'react-modal';
import {Editor, EditorState} from 'draft-js';

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
    editor : Editor;
    state = {
        showModal: true,
        editorState : EditorState.createEmpty()
    };
    constructor(props : PropsFromRedux) {
        super(props);

        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setEditor = this.setEditor.bind(this);

        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
            this.editor = editor;
          };

        this.date = new Date();
    }

    onChange(editorState : EditorState) {
    }

    setEditor(editor : Editor) {
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

                <label>Description</label>
                <input></input>

                <Datepicker selected={this.date} onChange={this.onCalendarChange}></Datepicker>

                <Editor
                ref={this.setEditor}
                editorState={this.state.editorState}
                onChange={this.onChange}
                />

            </form>

            </ReactModal>
        </div>
    }
}

export default connector(CreateActModal)
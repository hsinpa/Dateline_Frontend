import * as React from "react";
import ProjectBox from "./ProjectBox";
import {RooterReducerType} from "../../Reducer/ReducerContainer";
import {ProjectType} from '../../utility/TypeFlag'
import PackageListView from "../Package/PackageActivityListView";

import {fetchPost, setCurrentProject} from "./ProjectActions";
import CreateActModal from "../Activity/CreateActModal";
import ActivityDetailView from "../Activity/ActivityDetailView";

import {ActionFlag,TestJSONPath} from "../../utility/EventFlag";

import {Dispatch} from "redux";

import {connect, ConnectedProps } from 'react-redux';

const mapDispatch = (dispatch : Dispatch) => {
    return {
        fetchData : () => (fetchPost(dispatch, ActionFlag.FETCH_PROEJCT, TestJSONPath.FakeProject)),
        setCurrentProject : (project : ProjectType) => (setCurrentProject(dispatch, project))
    }
}

const mapState = (state: RooterReducerType) => ({
    projects: state.project_structure.projects
});

const connector = connect(
    mapState,
    mapDispatch
);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Project extends React.Component<PropsFromRedux> {

    constructor(props: PropsFromRedux) {
        super(props);

      }

    CreateProjectBox(project : ProjectType[]) {
        let boxs = [];
        let projectNum = project.length;

        boxs.push(<h2>Project name</h2>);

        for (let i = 0; i < projectNum; i++) {
            let titleName = (project[i].name);
            boxs.push(<ProjectBox title={titleName} />);

            if (i == 0) {
                this.props.setCurrentProject(project[i]);
            }
        }

        return boxs;
    }

    componentWillMount() {
        if (this.props.projects.length == 0) {
            console.log(this.props.projects.length);
            this.props.fetchData();
        }
    }
    
    render() {
        return <div>
                <CreateActModal />

                <div className="container">
                    <div className="columns">
                        <div id="project_main"  className="column is-1">
                            {this.CreateProjectBox(this.props.projects)}
                        </div>

                        <div className="column is-three-quarters is-8">
                            <ul>
                                <PackageListView/>
                            </ul>
                        </div>
                
                        <div className="column is-3">
                            { <ActivityDetailView/> }
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default connector(Project)
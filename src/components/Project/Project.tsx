import * as React from "react";
import ProjectBox from "./ProjectBox";
import {fetchPost} from "./ProjectActions";
import {Dispatch} from "redux";

import {connect, ConnectedProps } from 'react-redux';



const mapDispatch = (dispatch : Dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      reset: () => dispatch({ type: 'RESET' }),
      fetchData : () => (fetchPost(dispatch))
    }
  }

// {
//     fetchData: (dispatch : Dispatch) => dispatch({type : "He"})
//   }


  const connector = connect(
    null,
    mapDispatch
  );

  // The inferred type will look like:
  // {isOn: boolean, toggleOn: () => void}
  type PropsFromRedux = ConnectedProps<typeof connector>  
  
class Project extends React.Component<PropsFromRedux> {

    CreateProjectBox(generateNum : number) {
        let boxs = [];

        for (let i = 0; i < generateNum; i++) {
            let titleName = "Project name " + (i+1);
            boxs.push(<ProjectBox title={titleName} />);
        }

        return boxs;
    }

    componentWillMount() {
        
        this.props.fetchData();
    }
    
    render() {
        return <div className="container" id="project_main" >
            {this.CreateProjectBox(4)}
        </div>;
    }
}

export default connector(Project)
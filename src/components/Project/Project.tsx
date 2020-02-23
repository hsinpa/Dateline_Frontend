import * as React from "react";
import ProjectBox from "./ProjectBox";

class Project extends React.Component {
    
    CreateProjectBox(generateNum : number) {
        let boxs = [];

        for (let i = 0; i < generateNum; i++) {
            let titleName = "Project name " + (i+1);
            boxs.push(<ProjectBox title={titleName} />);
        }

        return boxs;
    }
    
    render() {
        return <div className="container" id="project_main" >
            {this.CreateProjectBox(4)}
        </div>;
    }
}

export default Project;
import * as React from "react";

export interface ProjectBoxProp { title: string; }

class ProjectBox extends React.Component<ProjectBoxProp, {}> {

    render() {
        return <div className="project_box">
                <h2>{this.props.title}</h2>
                <button>See more detail</button>
            </div>;
    }
}

export default ProjectBox;
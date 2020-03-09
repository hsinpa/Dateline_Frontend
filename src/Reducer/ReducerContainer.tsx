import {combineReducers} from 'redux';

import {ProjectReducer, ProjectStructure} from '../components/Project/ProjectReducer';
import {ProjectType, TaskIssueType} from '../utility/TypeFlag'

import {TaskIssueReducer} from '../components/Activity/TaskIssueReducer';
import {PackageReducer, PackageStructure} from '../components/Package/PackageReducer';

export interface RooterReducerType{
    project_structure : ProjectStructure,
    taskIssues : TaskIssueType[],
    packages : PackageStructure
}

export const Reducer = combineReducers({
    project_structure : ProjectReducer,
    taskIssues : TaskIssueReducer,
    packages : PackageReducer
});
import {combineReducers} from 'redux';

import {ProjectReducer, ProjectStructure} from '../components/Project/ProjectReducer';
import {ProjectType, TaskIssueType} from '../utility/TypeFlag'

import {ActivityReducer, ActivityStructure} from '../components/Activity/ActivityReducer';
import {PackageReducer, PackageStructure} from '../components/Package/PackageReducer';

export interface RooterReducerType{
    project_structure : ProjectStructure,
    activity_structure : ActivityStructure,
    packages_structure : PackageStructure
}

export const Reducer = combineReducers({
    project_structure : ProjectReducer,
    activity_structure : ActivityReducer,
    packages_structure : PackageReducer
});
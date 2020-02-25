import {combineReducers} from 'redux';

import {ProjectReducer, ProjectType, TaskIssueType} from '../components/Project/ProjectReducer';

import {TaskIssueReducer} from '../components/TaskIssue/TaskIssueReducer';

export interface RooterReducerType{
    projects : ProjectType[],
    taskIssues : TaskIssueType[]
}

export const Reducer = combineReducers({
    projects : ProjectReducer,
    taskIssues : TaskIssueReducer
});
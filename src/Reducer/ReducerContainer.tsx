import {combineReducers} from 'redux';

import {ProjectReducer, ProjectType, TaskIssueType} from '../components/Project/ProjectReducer';

import {TaskIssueReducer} from '../components/TaskIssue/TaskIssueReducer';
import {TaskDetailReducer} from '../components/TaskDetail/TaskDetailReducer';

export interface RooterReducerType{
    projects : ProjectType[],
    taskIssues : TaskIssueType[],
    taskDetail : TaskIssueType
}

export const Reducer = combineReducers({
    projects : ProjectReducer,
    taskIssues : TaskIssueReducer,
    taskDetail : TaskDetailReducer
});
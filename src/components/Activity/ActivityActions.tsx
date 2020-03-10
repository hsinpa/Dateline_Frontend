import {Dispatch} from "redux";
import {ProjectType, ActivityType} from '../../utility/TypeFlag'

import {ActionFlag,TestJSONPath } from "../../utility/EventFlag";
import {PostFetch} from "../../utility/Utility";

export const getAllActivity = (dispatch : Dispatch, project : ProjectType) => {
    try {
        PostFetch(TestJSONPath.FakeActivity, (data : ActivityType[]) => {
            let packageSets : ActivityType[] = [];
            data.forEach(x => {
                if (x.project_id == project.id)
                    packageSets.push(x);
            });

            console.log(packageSets);
            dispatch({
                type : ActionFlag.FETCH_ACTIVITY,
                payload : packageSets
            })
        });
    } catch (error) {
      console.error(error);
    }
}

export const setOnClickActivity = (dispatch : Dispatch, project : ActivityType) => {
    dispatch({
        type : ActionFlag.SET_SELECTED_ACTIVITY,
        payload : project
    })
}
import {Dispatch} from "redux";
import {ProjectType, PackageType} from '../../utility/TypeFlag'

import {ActionFlag,TestJSONPath } from "../../utility/EventFlag";
import {PostFetch} from "../../utility/Utility";

export const getAllPackage = (dispatch : Dispatch, project : ProjectType) => {
    try {
        console.log(project);

        if (project == null) return;

        PostFetch(TestJSONPath.FakePackage, (data : PackageType[]) => {
            let packageSets : PackageType[] = [];
            data.forEach(x => {
                if (x.project_id == project.id)
                    packageSets.push(x);
            });

            console.log(packageSets);
            dispatch({
                type : ActionFlag.GET_PACKAGE_BY_PID,
                payload : packageSets
            })
        });
    } catch (error) {
      console.error(error);
    }
}

interface GetPackageActionInterface {
    type: string,
    payload: PackageType[]
}
export type GetPackageActionType = GetPackageActionInterface;
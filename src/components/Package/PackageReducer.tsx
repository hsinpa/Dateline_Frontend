import {GetPackageActionType} from "./PackageActions";
import {ActionFlag} from "../../utility/EventFlag";
import { TaskIssueType, PackageType} from '../../utility/TypeFlag'

export interface PackageStructure {
    packages : PackageType[],
};

const initialState : PackageStructure = {
    packages : [],
};

export function PackageReducer(state = initialState, action : GetPackageActionType ) : PackageStructure {
    switch (action.type) {
        case ActionFlag.GET_PACKAGE_BY_PID:

        return {...state, packages : action.payload}
    }

    return state;
}
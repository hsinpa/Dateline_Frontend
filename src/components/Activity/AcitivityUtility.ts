import {ProjectType, ActivityType, PackageType} from '../../utility/TypeFlag'


class ActivityUtility {
    
    activityList : ActivityType[] = [];

    constructor() {

    }

    UpdateActivityList(activityList : ActivityType[]) {
        this.activityList = activityList;
    }

    GetAcitivityFilterByPackageID(package_id : string) : ActivityType[] {
        return this.activityList.filter(x=>x.package_id == package_id);
    }
}

export default ActivityUtility;
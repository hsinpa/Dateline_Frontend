import {ProjectType, ActivityType, PackageType} from '../../utility/TypeFlag'


class ActivityUtility {
    
    activityList : ActivityType[] = [];

    constructor() {

    }

    UpdateActivityList(activityList : ActivityType[]) {
        this.activityList = activityList;
    }

    GetTotalActivityWeight(activityList : ActivityType[]) : number {
        
        if (activityList.length <= 0) return 0;

        let activityCount = activityList.length;
        let totalWeight = activityList.
            map(x=>x.priority).
            reduce(function(a, b) {
             return a + b; 
        });

        if (totalWeight == null)
            totalWeight = 0;

        return Math.round(totalWeight / activityCount * 100);
    }

    GetAcitivityFilterByPackageID(package_id : string) : ActivityType[] {
        return this.activityList.filter(x=>x.package_id == package_id);
    }
}

export default ActivityUtility;
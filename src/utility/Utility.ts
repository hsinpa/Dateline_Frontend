export const UtilityFunctions = {
    GetRandomID : function() : string {
        let number = Math.random() // 0.9394456857981651
        number.toString(36); // '0.xtis06h6'
        return number.toString(36).substr(2, 9); // 'xtis06h6'
    }
}
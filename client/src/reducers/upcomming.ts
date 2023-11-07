interface Action{
    type:String,
    payload:any,
    category?:any
}
export default (upcommings = [], action:Action) =>{

    switch(action.type){
        case 'FetchAllUpcomming':
            return action.payload;
        case 'AddUpcomming':
            return [...upcommings,action.payload]    
        default:
            return upcommings;
    }
}
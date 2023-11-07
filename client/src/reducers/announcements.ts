interface Action{
    type:String,
    payload:any,
    category?:String
}
export default (announcements = [], action:Action) =>{

    switch(action.type){
        case 'FetchAllAnnouncements':
            return action.payload;
        case 'AddAnnouncements':
            return [...announcements,action.payload]    
        default:
            return announcements;
    }
}
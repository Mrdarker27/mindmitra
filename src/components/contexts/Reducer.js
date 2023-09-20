const UserReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_USER_DATA" :
            const user_data = {...state.user_data, ...action.user_data };
            localStorage.setItem("user_data", JSON.stringify(user_data));
            return {
                ...state,
                user_data: user_data
            }
        
        case "PROFILE_STATUS_UPDATE" :
            const profile_updation = {...state.profile_updation, ...action.profile_updation}
            localStorage.setItem("profile_updation", JSON.stringify(profile_updation));
            return {
                ...state,
                profile_updation: profile_updation
            }
            
        default:
            return state
        
    }
}

export default UserReducer
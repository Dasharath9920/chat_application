import { actionTypeEnum } from "./actionTypes"

const initializer = {
    currentChat: 0,
    fetchMessages: true,
    myProfile: {
        profilePic: require('../assets/images/dasharath.jpeg')
    },
    profiles: [
        {
            name: 'Dasharath',
            image: require('../assets/images/dasharath.jpeg'),
            isOnline: false,
            lastUpdated: undefined
        },
        {
            name: 'Sweet',
            image: require('../assets/images/sweet.jpg'),
            isOnline: true,
            lastUpdated: undefined
        }
    ]
};

const updateProperties = (state=initializer, action) => {
    switch(action.type){
        case actionTypeEnum.UPDATE_CURRENT_CHAT: {
            return {...state, currentChat: action.currentChat};
        }

        case actionTypeEnum.FETCH_MESSAGES: {
            return {...state, fetchMessages: action.fetchMessages};
        }

        default: {
            return state;
        }
    }
}

export default updateProperties;
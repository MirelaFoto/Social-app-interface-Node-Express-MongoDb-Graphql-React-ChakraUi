import React, {useReducer} from 'react';
import {allUsers} from '../Containers/AllUsers';

export const initialState = {
    users: allUsers
     ,
    favoritesList: []
}


export const ToggleFavReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_FAV': 
            if(state.favoritesList.includes(action.payload)) {
                return {...state, favoritesList: state.favoritesList}
            } else {
                const updatedItem = state.favoritesList.concat(action.payload)
                return {...state, favoritesList: updatedItem}                
            }
        case 'REMOVE_FAV':
            return {...state, favoritesList: state.favoritesList.filter(id => id!== action.payload)}
        case 'DELETE_FAV':
            return {...state, favoritesList: state.favoritesList.filter(item=> item.id!== action.payload)}
        default: 
            return state
    }
}

export const UserContext = React.createContext(initialState);

export const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(ToggleFavReducer, initialState)
    // console.log(state)

    return (
        <UserContext.Provider value={{state,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}
import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/constants'

export const getMenu = () => async(dispatch) => {

    try {
        const { data } = await api.fetchMenuItems();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }
    
}

export const createMenuItem = (menuItem) => async (dispatch) => {

    try {
        const { data } = await api.createMenuItem(menuItem);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
    
}

export const updateItem = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateItem(id, recipe);

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        await api.deleteItem(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}
import { configureStore } from '@reduxjs/toolkit';
import { ELEMENT_TYPES } from '../utils/constants';
import * as actionTypes from './actionTypes';

const initialState = {
    elements: [],
    lastSelectedBtn: ELEMENT_TYPES.DEFAULT,
    title: '',
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.LAST_SELECTED_BTN:
            return {
                ...state,
                lastSelectedBtn: action.data,
                elements: state.elements.map(e =>
                    e.isNew ? {
                        ...e,
                        type: action.data === ELEMENT_TYPES.OL || action.data === ELEMENT_TYPES.UL ? ELEMENT_TYPES.LI : action.data,
                        listType: action.data === ELEMENT_TYPES.OL || action.data === ELEMENT_TYPES.UL ? action.data : null
                    } : e
                )
            }
        case actionTypes.UPDATE_ELEMENT_EDIT:
            return {
                ...state,
                elements: state.elements.map((e, i) =>
                    action.data === i ? { ...e, canEdit: true, isNew: false } : { ...e, canEdit: false, isNew: false }
                )
            }
        case actionTypes.REMOVE_ELEMENT:
            return { ...state, elements: state.elements.filter((e, i) => action.data !== i) }
        case actionTypes.REORDER_ELEMENT:
            return { ...state }
        case actionTypes.ADD_ELEMENT:
            return { ...state, elements: [...state.elements, action.data] }
        case actionTypes.ADD_ELEMENT_TEXT:
            return { ...state, elements: state.elements.map((e, i) => action.id === i ? { ...e, ...action.data } : e) }
        case actionTypes.ADD_TITLE:
            return { ...state, title: action.data }
        default:
            return state
    }
}

export const store = configureStore({
    reducer
})

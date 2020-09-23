import * as actionTypes from './actionTypes';

export const lastSelectedBtn = (data) => ({ type: actionTypes.LAST_SELECTED_BTN, data })

export const addTitle = (data) => ({ type: actionTypes.ADD_TITLE, data })

export const addElement = (data) => ({ type: actionTypes.ADD_ELEMENT, data })
export const addElementText = (id, data) => ({ type: actionTypes.ADD_ELEMENT_TEXT, id, data })
export const updateElementEdit = (data) => ({ type: actionTypes.UPDATE_ELEMENT_EDIT, data })
export const removeElement = (data) => ({ type: actionTypes.REMOVE_ELEMENT, data })
export const reorderElement = (data) => ({ type: actionTypes.REORDER_ELEMENT, data })

export const formatElement = data => ({ type: actionTypes.FORMAT_ELEMENT, data })
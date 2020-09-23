import React from 'react';
import { useDispatch } from 'react-redux';
import { ELEMENT_TYPES } from '../../../utils/constants';
import { lastSelectedBtn as lastSelectedBtnAction } from '../../../store/actionCreators';
import { useSelector } from 'react-redux';

const ELEMENT_BTN_TYPES = [
    { className: 'add-h1', type: ELEMENT_TYPES.H1, text: 'H1' },
    { className: 'add-h2', type: ELEMENT_TYPES.H2, text: 'H2' },
    { className: 'add-ul', type: ELEMENT_TYPES.UL, text: 'UL' },
    { className: 'add-ol', type: ELEMENT_TYPES.OL, text: 'OL' },
    { className: 'add-link', type: ELEMENT_TYPES.A, text: 'A' },
    { className: 'add-default', type: ELEMENT_TYPES.DEFAULT, text: 'Default' },
]

const SelectorList = () => {
    const dispatch = useDispatch()
    const lastSelectedBtn = useSelector(({ lastSelectedBtn }) => lastSelectedBtn)
    return (
        <>
            {
                ELEMENT_BTN_TYPES.map(({ className, text, type }, i) =>
                    <button className={`${className} ${lastSelectedBtn === type ? 'active' : ''}`} key={`selectors-${i}`}
                        onClick={() => dispatch(lastSelectedBtnAction(type))}>{text}</button>
                )
            }
        </>
    )
}

export default SelectorList;
import React, { createElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, addElementText } from '../../store/actionCreators';
import { ELEMENT_TYPES } from '../../utils/constants';
import FormatOptions from '../FormatOptions/FormatOptions';
import SelectorBtnsList from './SelectorBtnsList/SelectorBtnsList';
import UpdateBtnsList from './UpdateBtnsList/UpdateBtnsList';

const EditorInput = ({ type, canEdit, isNew, value, id, classList, getSelected, listType, listTypeInd }) => {

    const dispatch = useDispatch()
    const [text, setText] = useState(value)
    const [openFormatPP, setOpenFormatPP] = useState(false)
    const lastSelectedBtn = useSelector(({ lastSelectedBtn }) => lastSelectedBtn)

    const listNo = listType === ELEMENT_TYPES.OL ? listTypeInd + '. ' : listType === ELEMENT_TYPES.UL ? '* ' : ''

    useEffect(() => {
        setText(value)
    }, [value])

    return (
        <div className={`editor-input ${classList.join(' ')}`}>
            {!isNew && <div className="edit-options"><UpdateBtnsList id={id} /></div>}
            {
                canEdit
                    ? <div className="form-container">
                        {openFormatPP ? <FormatOptions id={id} optionList={classList} /> : null}
                        <input className="editor-input-text" type="text" onChange={({ target }) => setText(target.value)} value={text}
                            autoFocus
                            onMouseOut={() => { }}
                            onSelect={({ target }) => {
                                setOpenFormatPP(!openFormatPP)
                            }}
                            onKeyDown={({ key }) => {
                                if (key === 'Enter') {
                                    dispatch(addElementText(id, { value: text, isNew: false, canEdit: false }))
                                    setText('')
                                    dispatch(addElement({
                                        type: lastSelectedBtn === ELEMENT_TYPES.OL || lastSelectedBtn === ELEMENT_TYPES.UL ? ELEMENT_TYPES.LI : lastSelectedBtn,
                                        value: '',
                                        canEdit: true,
                                        isNew: true,
                                        listType: lastSelectedBtn === ELEMENT_TYPES.OL || lastSelectedBtn === ELEMENT_TYPES.UL ? lastSelectedBtn : null,
                                        classList: []
                                    }))
                                }
                            }} />
                    </div>
                    : createElement(type, {
                        className: 'element',
                        href: type === ELEMENT_TYPES.A ? value : '',
                        target: '_blank',
                        onClick: () => getSelected(id)
                    }, listNo + value)
            }
            <div className="selectors">
                {isNew ? <SelectorBtnsList /> : null}
            </div>
        </div>
    )
}

export default EditorInput;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, addTitle } from '../../store/actionCreators';
import { ELEMENT_TYPES } from '../../utils/constants';


const DocTitle = () => {

    const [titleText, setTitleText] = useState('')
    const dispatch = useDispatch()
    const lastSelectedBtn = useSelector(({ lastSelectedBtn }) => lastSelectedBtn)

    const title = useSelector(({ title }) => title)

    return (
        <>
            {
                title
                    ? <div className="title bold">{title}</div>
                    : <input className="title-input" type='text' value={titleText} onChange={({ target }) => setTitleText(target.value)}
                        onKeyDown={({ key }) => {
                            if (key === 'Enter') {
                                dispatch(addElement({
                                    type: lastSelectedBtn,
                                    value: '',
                                    canEdit: true,
                                    isNew: true,
                                    listType: lastSelectedBtn === ELEMENT_TYPES.OL || lastSelectedBtn === ELEMENT_TYPES.UL ? lastSelectedBtn : null,
                                    classList: []
                                }))
                                dispatch(addTitle(titleText))
                            }
                        }} />
            }
        </>
    )
}

export default DocTitle;
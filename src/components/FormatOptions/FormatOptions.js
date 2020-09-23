import React from 'react';
import { useDispatch } from 'react-redux';
import { formatElement } from '../../store/actionCreators';
import { FORMAT_TYPES } from '../../utils/constants';

const FORMAT_BUTTONS = [
    { type: FORMAT_TYPES.BOLD, text: 'B', className: 'format-bold' },
    { type: FORMAT_TYPES.ITALIC, text: 'I', className: 'format-italic' },
    { type: FORMAT_TYPES.UNDERLINE, text: 'U', className: 'format-underline' },
]

const FormatOptions = ({ id, optionList }) => {

    const dispatch = useDispatch()

    const onClick = (type) => {
        for (const key in FORMAT_TYPES)
            if (FORMAT_TYPES[key] === type) dispatch(formatElement({ id, type, value: !optionList[type] }))

    }

    return (
        <div className="format-options">
            {
                FORMAT_BUTTONS.map(({ className, text, type }, i) =>
                    <button key={`format-${i}`} onClick={() => onClick(type)} className={`${className} ${optionList[type]}`}>{text}</button>
                )
            }
        </div>
    )
}

export default FormatOptions;
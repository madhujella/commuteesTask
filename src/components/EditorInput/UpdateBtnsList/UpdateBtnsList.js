import React from 'react';
import { useDispatch } from 'react-redux';
import { removeElement, reorderElement } from '../../../store/actionCreators';

const UpdateElementBtns = ({ id }) => {
    const dispatch = useDispatch()
    return (
        <>
            <button className="delete" onClick={() => dispatch(removeElement(id))}>x</button>
            {/* <div className="drag" onClick={() => dispatch(reorderElement(id))}>drag</div> */}
        </>
    )
}

export default UpdateElementBtns;
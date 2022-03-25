import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ListDetails.css'

const ListDetails = ({ list }) => {
    const { img, name } = list;
    return (
        <div className='d-flex align-items-center justify-content-between my-3'>
            <div className='list-details-img'>
                <img src={img} alt="" />
            </div>
            <h5>{name}</h5>
            <FontAwesomeIcon icon={faRemove} />
        </div>
    );
};

export default ListDetails;
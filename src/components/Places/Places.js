import React from 'react';
import './Places.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Places = ({ country, addToWishList }) => {
    const { img, name, cost } = country
    return (
        <div>
            <div className="col">
                <div className="card  place-card">
                    <div className='place-card-img'>
                        <img src={img} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text fs-5">Cost: ${cost}</p>
                        <button onClick={() => addToWishList(country)} className='btn btn-outline-primary d-flex align-items-center'>
                            <p className='m-2'>Add to Wishlist</p>
                            <FontAwesomeIcon className='m-2' icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;
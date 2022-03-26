import React from 'react';
import ListDetails from '../ListDetails/ListDetails';
import './WishList.css'

const WishList = ({ lists, chooseAgain, getBest1 }) => {
    return (
        <div className='wish-list shadow-sm p-3'>
            <h3>Wish List</h3>
            <div>
                {
                    lists.map(list => <ListDetails key={list.id} list={list} />)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => getBest1()} className='btn btn-outline-success'>BEST 1 TO TRAVEL</button>
                <button onClick={() => chooseAgain()} className='btn btn-outline-primary'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default WishList;
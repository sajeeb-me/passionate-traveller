import React, { useEffect, useState } from 'react';
import Places from '../Places/Places';
import WishList from '../WishList/WishList';
import './Body.css'

const Body = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const [lists, setList] = useState([]);
    let newArray = [];
    const addToWishList = (selectedCountry) => {
        if (lists.length < 4) {
            if (lists.indexOf(selectedCountry) < 0) {
                newArray = [...lists, selectedCountry];
                setList(newArray)
            }
        }
        else {
            alert("You can't add more then 4 Places in you Wish List!")
        }
    }
    const chooseAgain = () => {
        setList([]);
    }
    const getBest1 = () => {
        // const bestArray = lists[Math.floor(Math.random() * lists.length)];
    }
    return (
        <div className='country-container'>
            <h1 className='my-3 text-center text-primary'>Passionate Traveler</h1>
            <h3 className='my-3 text-center'>Choose 4 Places</h3>
            <div className='row'>
                <div className="country-section py-4 col-12 col-md-9">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            countries.map(country => <Places key={country.id} country={country} addToWishList={addToWishList} />)
                        }
                    </div>
                </div>
                <div className="selected-countries col-12 col-md-3">
                    <WishList lists={lists} chooseAgain={chooseAgain} getBest1={getBest1} />
                </div>
            </div>
        </div>
    );
};

export default Body;
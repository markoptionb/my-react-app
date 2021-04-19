import { render } from '@testing-library/react';
import React from 'react';

const SearchButton = () => {
    render()
        return(
            <div>
                <input type='text' placeholder='Search Coins' className='coinInput'></input>
                <button type='submit'></button>
            </div>
        )
} 


export default SearchButton;
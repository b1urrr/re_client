import React from 'react';
import { useDispatch } from 'react-redux';
import './recipe.css';

import { deleteItem } from '../../../actions/menu';
import { useLocation } from 'react-router-dom';



const Recipe = ({ recipe, setCurrentId }) => {

    const location = useLocation();
    const dispatch = useDispatch();

    return (
        <div className='re__recipe'>
            <div className='re__recipe-content'>
                <div className='re__recipe-content_main'>
                <h1 className='re__recipe-content_main-header'>{recipe.title}</h1>
                <h1 className='re__recipe-content_main-price'>{recipe.price} лв.</h1>
                </div>
                <div className='re__recipe-content_line'></div>
                <div className='re__recipe-content_message'>
                <p>/{recipe.message}/</p>


                <div className='re__recipe-content_buttons'>
                {location.pathname === '/editmenu' && 
                    <>
                    <button onClick={() => setCurrentId(recipe._id)}>Edit</button>
                    <button onClick={() => dispatch(deleteItem(recipe._id))}>Delete</button>
                    </>
                }
               
                </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
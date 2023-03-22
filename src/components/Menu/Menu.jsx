import React from 'react';
import Recipe from './Recipe/Recipe';
import { useSelector } from 'react-redux';
import { typeOptions } from '../../constants/constants';

import './menu.css'

const Menu = ({ setCurrentId }) => {

    const recipes = useSelector((state) => state.recipes);
    
    return (
        <>
        <div className='re__menu section__padding'>

        {typeOptions.map((section, index) => {
            return (
                <div className='re__menu-section' key={index}>
                    <div className='re__menu-section_title'>
                    <h1>{section}</h1>
                    </div>
                    <div className='re__menu-section_linebreak'></div>
                    <div className='re__menu-section_recipes'>
                    {recipes.filter(recipe => recipe.type === section).map((recipe) => (
                    <Recipe recipe={recipe} key={recipe._id} setCurrentId={setCurrentId} />
                    ))}
                    </div>
                </div>
            )}
        )}
        </div>
        </>
    )
}

export default Menu;
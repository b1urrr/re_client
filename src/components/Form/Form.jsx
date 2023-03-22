import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMenuItem, updateItem } from '../../actions/menu';
import { useSelector } from 'react-redux';

import { typeOptions } from '../../constants/constants';

import './form.css';

const Form = ({ currentId, setCurrentId }) => {


    const [recipeData, setRecipeData] = useState({
        title: '', message: '', price: '', type: '',
    });

    const recipe = useSelector((state) => currentId ? state.recipes.find((r) => r._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(recipe) setRecipeData(recipe);
    }, [recipe])

    const handleSubmit = (e) => {
        // e.preventDefault();

        if(currentId) {
            dispatch(updateItem(currentId, recipeData));
        } else {
        dispatch(createMenuItem(recipeData))
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null)
        setRecipeData({ title: '', message: '', price: '', type: '' })
    }

    return (
        <div className='re__form'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h1>{ currentId ? 'EDIT' : 'NEW' } RECIPE</h1>
                <input required type='text' label='title' placeholder='Recipe Title' value={recipeData.title} onChange={(e) => setRecipeData({ ... recipeData, title: e.target.value })} />
                <input required type='text' label='message' placeholder='Ingredients' value={recipeData.message} onChange={(e) => setRecipeData({ ... recipeData, message: e.target.value })} />
                <input required type='text' label='price' placeholder='Price' value={recipeData.price} onChange={(e) => setRecipeData({ ... recipeData, price: e.target.value })} />
                <select required onChange={(e) => setRecipeData({ ... recipeData, type: e.target.value })}>
                        <option value="">Please select</option>
                    {typeOptions.map((option) => {
                        return (

                        <option value={option}>{option}</option>
                        
                    )})}
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;
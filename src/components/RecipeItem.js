import { render } from '@testing-library/react';
import React from 'react';
 
const RecipeItem = (props) =>{
    console.log(props.detail)
    render(
        <div>Item</div>
    )
}

export default RecipeItem;
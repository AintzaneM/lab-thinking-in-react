import React from 'react';

function ProductRow (props){
    
    return (
        <tr key = {props.id} className="ProductRow">
        {props.stocked === false 
        ? (<td style = {{ color:"red"}}>{props.name}</td> )
        
        : (<td style = {{color: "green"}}>{props.name}</td>)}

        <td>{props.price}</td>
        </tr>
    )
}


export default ProductRow;
import React from "react";

const NumberInput = props => {
    return(
        <div>
            <label htmlFor="qtdNumbers"> {props.label} </label>
            <input 
                id="qtdNumbers"
                type="number"
                value={ props.qtdNumbers }
                onChange={ props.onChangeQtdNumbers }
            />
        </div>
    );
}

export default NumberInput;
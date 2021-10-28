import React from "react";

const Aleatorio = props => {
    const { min, max } = props;
    const numero = Math.round( Math.random() * (max - min) + min );

    return(
        <p>Seu número aleatório é: {numero}</p>
    );
}

export default Aleatorio;
import React from "react";

import "./Card.css";

const Card = ( props ) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00', 
    }

    return(
        <div className="card" style={ cardStyle }>
            <div className="title">{ props.titulo }</div>
            <div className="content"> { props.children } </div>
        </div>
    )
};

export default Card;
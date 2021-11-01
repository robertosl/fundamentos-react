import React from "react";

import "./Display.css";

const Display = props => {
    return(
        <div className="luckyNumbers">
            <p>{ props.num }</p>
        </div>
    );
}

export default Display;
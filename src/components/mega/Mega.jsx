import React from "react";

import Display from "./Display";
import NumberInput from "./NumberInput";

import "./Mega.css";

class Mega extends React.Component{

    state = {
        qtde: this.props.defaultQtdValue || 6,
    };

    gerarNumeros = (qtde, min, max) => {
        const numbers = [];
        while( numbers.length < qtde ){
            const number = Math.round( Math.random() * (max + 1 - min) + min );
            if( !numbers.includes( number ) ) numbers.push( number);
        }
        return numbers.sort( (a,b) => a-b );
    };

    setQtd = event => {
        this.setState({
            qtde: +event.target.value,
        });
    }

    render(){
        
        const displayNumbers = this.gerarNumeros( this.state.qtde, 1, 60 ).map( (number, i) => {
            return(
                <Display num={ number } key={ i }/>
            );
        });

        return(  
            <div className="displayNumbers"> 
                { displayNumbers } 
                <NumberInput
                    label="Digite a quantidade de jogos desejados:" 
                    qtdNumbers={ this.state.qtde }
                    onChangeQtdNumbers={ this.setQtd }  
                />
            </div>
        );
    }
}

export default Mega;

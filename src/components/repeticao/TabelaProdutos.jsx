import React from "react";

import produtos from "../../data/Produtos";

import "./TabelaProdutos.css" 

const TabelaProdutos = props => {
    
    const produtosTD = produtos.map( (produto, i) => {
        return(
            <tr key={ produto.id } className={ i%2 === 0 ? "par" : "impar" }>
                <th>{ produto.id }</th>
                <th>{ produto.nome }</th>
                <th>R$ { produto.preco.toFixed(2).replace('.', ',') }</th>
            </tr>
        );
    } );

    return(
        <div className="tabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { produtosTD }
                </tbody>
            </table>
        </div>
    )
};

export default TabelaProdutos;
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import TabelaProduto from "./components/repeticao/TabelaProdutos";

import "./App.css"

const App = () => (
    // Desafio número aleatório
    <div className="app">
        <h1>Fundamentos em React</h1>
        <div className="cards">
            <Card titulo="Desafio Repetição" color="#3A9AD9">
                <TabelaProduto />
            </Card>
            <Card titulo="Desafio Número Aleatório" color="#FA6900">
                <Aleatorio min={10} max={100} />
            </Card>
        </div>
    </div>
);

export default App;
import React from 'react';
import  ReactDOM  from 'react-dom';
import "./style.css";


function sum(a,b) {
    return a+b
}

const primeiroJSX = () => {
    return (
        <div> 
            Franklin Perseu - Introdução ao ReactJs
            <h1>Soma: {sum(4,2)} </h1>
        </div>
    )
}


const App = () => {

    return (
    <div className="teste">
        {primeiroJSX()}
    </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
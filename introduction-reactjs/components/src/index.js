import React from 'react';
import  ReactDOM  from 'react-dom';
import Button from './Button'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import "./style.css";

function soma(a,b)  {
    alert(a+b);

}

function App() {
    
    return (
    <div className="App">
        Hello World
        <Button onClick={() => soma(10,20)} name="franklin"/>
        <ComponentA>
            <ComponentB>
                <Button onClick={() => soma(30,30)} name="perseu"/>
            </ComponentB>
        </ComponentA>
    </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
import React from "react";



const hasCostumer = true;

const buttonA = <button >historico Botão</button>;
const buttonB = <button>cadastrar Botão</button>;
const customer = 'F P lima';
const renderAddCustomer = () => (
    <div>
      Clique para visualizar abaixo o Historico dos clientes
      <br />
      {buttonA}
    </div>
)

const renderHistoryCustomer = () => (
    <div>
        clique abaixo para cadastrar os clientes
        <br />
        {buttonB}
    </div>
)

function showCustomer(){ 
    if(!hasCostumer) return null;

    return(
        <div>
            <h1>Nome do Cliente: {customer}</h1>
        </div>
    )

    
    }
function App() {
    console.log('hello');
    return (
        

        <div className="App">
            <p> Hello World!!</p>
            <p> Welcome to the jungle!!</p>
            {hasCostumer ? (
                renderAddCustomer()
            ) : (
                renderHistoryCustomer()
            )}
            <div>
                {showCustomer()}
            </div>
        </div>
    );
}

export default App;
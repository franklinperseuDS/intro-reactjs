import React from "react";
import mock from '../mock';
import Button from '../components/Button'


function App() {
    const handleClick = (id) => {
        console.log('deletar cliente');
        alert(`ID ${id}`)
    }
    const renderCustomers = (customer,index) => {
        return(
            <div key={`customer-${customer.id}`}>
                <li >
                    {customer.name} - <Button onClick={() => handleClick(customer.id)}>Deletar o cliente </Button>
                    
                </li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }
    
    const renderSkills = (skill,index) => <div style={{paddingLeft: '30px'}} key={`skill-${skill}-${index}`}><li >{skill}</li> </div>
        
    return (
        <div className="App">
            <p> Hello World!!</p>
            <p> Welcome to the jungle!!</p>
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
}

export default App;


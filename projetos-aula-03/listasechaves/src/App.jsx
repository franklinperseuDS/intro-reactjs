import React from "react";



const listCustomer = [
    {
        id: 1,
        name: 'Perseu',
        skills: ['React', 'Node', 'CSS','WebPack']
    },
    {
        id: 2,
        name: 'Thalyta',
        skills: ['HTML', 'React Native', 'GO','JS']
    },
    {
        id: 3,
        name: 'Thomas',
        skills: ['VB6']
    },
    {
        id: 4,
        name: 'Boris',
        skills: ['PHP']
    },
];



function App() {
    const renderCustomers = (customer,index) => {
        return(
            <div key={`customer-${customer.id}`}>
                <li >
                    {customer.name} - 
                    
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
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
}

export default App;
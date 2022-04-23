import React from 'react';


function ComponentA(props) {

    return (
        <div> ComponentA
          {/* erro ao tentar adicionar children */}
          <div> {props.children}</div>
        </div>
            
    )
    
}

export default ComponentA;
import React from 'react';

function CookeHandle(props) {
  const cookeProcedures = props.procedures.map((procedure, index) => {
    return (
      <li key={index}>
        { procedure}
      </li>
    )
  })
  return(
    <ol>
      { cookeProcedures }
    </ol>
  )
}

export default CookeHandle;
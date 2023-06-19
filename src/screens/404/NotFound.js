import React from "react";

const NotFound = (props) => {
    const goHome=()=>{
        props.history.push("/")
    }
  return (
    <div>
      PAGINA NO ENCONTRADA
      <button onClick={goHome}>Regresar al inicio</button>
    </div>
  );
};

export default NotFound;

import React, { useState } from 'react'

import PaginaAtualContext from "../Contexts/PaginaAtualContext";


const PaginaAtualProvider = ({children}) => {

    const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <PaginaAtualContext.Provider value={{paginaAtual,setPaginaAtual}}>
        {children}
    </PaginaAtualContext.Provider>
  )
}

export default PaginaAtualProvider
import React, { useState } from 'react'

import MenuOpen from "../Contexts/MenuOpenContext";


const PaginaAtualProvider = ({children}) => {

    const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <PaginaAtualContext.Provider value={{paginaAtual,setPaginaAtual}}>
        {children}
    </PaginaAtualContext.Provider>
  )
}

export default PaginaAtualProvider
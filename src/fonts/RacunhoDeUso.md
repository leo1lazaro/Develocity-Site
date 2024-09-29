## Instalar font no CSS onde deseja usar
 -Colar isso no inicio do css:

    @font-face {
        font-family: 'Varino';
        src: url('../../../../fonts/Varino.ttf') format('truetype'); 
        font-weight: normal;
        font-style: normal;
    }
    :root{
        --font-principal: 'Varino', sans-serif;
    }

o caminho do 'src: url(...)' pode alterar de acordo com a localização do componente


## Usar Fonte no item
 -Colar isso dentro do item
 
    .item{
        font-family: var(--font-principal);
    }
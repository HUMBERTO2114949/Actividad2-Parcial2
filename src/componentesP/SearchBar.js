import React from 'react'


const SearchBar=(props)=> {
  
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  const inStockOnlyMayoreo = props.inStockOnlyMayoreo;
  const inStockOnlyOnline = props.inStockOnlyOnline;
  
  
  
  return (
    <form>
      
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={filterText}
        onChange={e => props.onFilterTextChange(e.target.value)} 
       
      />
      <p>
      <h5>Proveedor</h5>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={e => props.onInStockChange(e.target.checked)}
         
        />
        <span >
          P. Online
        </span>
        <br></br>
        <input 
          type="checkbox" 
          checked={inStockOnlyOnline} 
          onChange={e => props.onInStockChangeMayoreo(e.target.checked)}
         
        />
        
        <span >
          P. Mayoreo
        </span>
        <br></br>
        <input 
          type="checkbox" 
          checked={inStockOnlyMayoreo} 
          onChange={e => props.onInStockChangeMenudeo(e.target.checked)}
         
        />
        <span >
          P. Menudeo
        </span>
      </p>
    </form>
  );
}
export default SearchBar
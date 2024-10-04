import '../search/index.css'
const Search = () => {
  return (
    <>
    <div className='search-wrapper'>
    <input 
    
        type='text'
        placeholder='Search for answers...'
    />
    
    <button 
    type="submit" 
    className="search-btn-submit">Search</button>
   
    </div>
    </>
  )
}

export default Search

import { usePokemon } from "../contexts/PokemonContext"

const Pagination = () => {
  const { prevPageUrl, nextPageUrl, setCurrentPageUrl } = usePokemon()

  return (<div className="pagination">
    {prevPageUrl && <button className="load-more" onClick={()=>(
      setCurrentPageUrl(prevPageUrl)
    )}>Previous</button>}
    
    {nextPageUrl && <button className="load-more" onClick={()=>(
      setCurrentPageUrl(nextPageUrl)
    )}>Next</button>}
  </div>)
}
export default Pagination
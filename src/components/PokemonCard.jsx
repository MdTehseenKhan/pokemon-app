const PokemonCard = ({ id, name, image, type }) => {
  return (
    <div className={`thumb-container ${type}`}>
      <div className="number">
        <small>#{id > 9 ? id : `0${id}`}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  )
}
export default PokemonCard

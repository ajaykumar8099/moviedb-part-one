const CastItemDetails = props => {
  const {castDetails} = props
  const {originalName, characterName} = castDetails
  return (
    <div>
      <p>{originalName}</p>
      <p>{characterName}</p>
    </div>
  )
}
export default CastItemDetails

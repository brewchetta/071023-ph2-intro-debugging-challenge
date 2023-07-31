function MenuItem({ props }) {

  return (
    <img src={ props.image } alt={ props.name } />
    <h3>{ props.name }</h3>
  )
}

export default MenuItem

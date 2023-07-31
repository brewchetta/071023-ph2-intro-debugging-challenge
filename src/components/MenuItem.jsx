function MenuItem(props) {

  return (
    <div className="menu-item">
      <img src={ props.item.image } alt={ props.item.name } />
      <h3>{props.item.name}</h3>
    </div>
  )
}

export default MenuItem

import MenuItem from './MenuItem'
import menuItemsArray from '../menuItemsArray'

function Menu() {

  return (
      <>
        <h2>Menu</h2>

        <div className="menu-grid">

          <MenuItem item={menuItemsArray[0]} />
          <MenuItem item={menuItemsArray[1]} />
          <MenuItem item={menuItemsArray[2]} />

        </div>
      </>
  )
}

export default Menu

import MenuItm from './MenuItem'
import menuItemsArray from '../menuItemsArray'

function Menu() {

  return (
      <>
        <h2>Menu</h2>

        <div className="menu-grid">

          <MenuItem item={menuItemsArray[1]} />
          <MenuItem item={menuItemsArray[2]} />
          <MenuItem item={menuItemsArray[3]} />
          <MenuItem item={menuItemsArray[4]} />
          <MenuItem item={menuItemsArray[5]} />
          <MenuItem item={menuItemsArray[6]} />

        </div>
      </>
  )
}

export default Menu

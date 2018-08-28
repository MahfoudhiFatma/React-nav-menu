import React from 'react'
import NavItem from './NavItem'



const NavMenu= (props) =>
{
    return(
        <div className="container">
            {
                props.listOfItem.map((el,i) => <NavItem item={el} key={i} />)
            }
        </div>
    );
}

export default NavMenu;
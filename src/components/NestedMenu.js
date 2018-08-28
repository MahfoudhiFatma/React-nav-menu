import React from 'react'
import NestedMenuItem from './NestedMenuItem'



const NestedMenu= (props) =>
{
    return(
        <div className="nested-container"
         >
            {
            props.child.map((el,id) =><NestedMenuItem key={id} nesteditem={el}
            />)

            }

        </div>
    )
}

export default NestedMenu;
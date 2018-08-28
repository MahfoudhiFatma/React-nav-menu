import React from 'react'
import NestedMenu from './NestedMenu'

class NestedMenuItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            isSelected:false
        }
    }
    isHovering=()=>{
        this.setState({isOpen:true,isSelected:true})
    }
    unHovering = ()=> {
        this.setState({isOpen:false,isSelected:false})
     
    }
    render(){
    return(
        <div className="nested-container">
            <a onMouseOver={this.isHovering} onMouseLeave={this.unHovering} style={{color : this.state.isSelected ?'red': 'black'}}
            >{this.props.nesteditem.title}</a>
        </div>
    )
}
}
    

export default NestedMenuItem
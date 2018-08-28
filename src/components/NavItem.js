import React,{Component} from 'react'
import NestedMenu from './NestedMenu';


class NavItem extends Component{
    constructor(props){
        super(props)
        this.state ={
            isActive:false,
        }
    }
    
    isHovering = ()=> {
        this.setState({isActive:true})
        this.props.item.isActive= this.state.isActive

    }
    unHovering = ()=> {
        this.setState({isActive:false})
        this.props.item.isActive= this.state.isActive
    }
   
    render(){
        return (
        <div onMouseOver={this.isHovering} onMouseEnter={this.isHovering}  onMouseLeave={this.unHovering} >
            <a href={this.props.item.link} className="nav-menu" 
             style={{color : this.state.isActive ?'red': 'black'}}> 
            {this.props.item.name} </a>
            {this.state.isActive ? <NestedMenu child={this.props.item.children} isShowen={this.state.isActive}/> : null }
        </div>  
)
    }
   
}

export default NavItem
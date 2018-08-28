import React, { Component } from 'react';
import NavMenu from './components/NavMenu'



const menuItem=[{link:'#',name:'Home',children:[]},
{link:'#',name:'Services', children: [
  {
      id: 8,
      title: "item1",
      url: "/#"
  },
  {
      id: 9,
      title: "item2",
      url: "/#"
  },
  {
      id: 10,
      title: "item3",
      url: "/#"
  }
]},
{link:'#',name:'Contact',children:[]}]
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavMenu listOfItem={menuItem} />
      </div>
    );
  }
}

export default App;

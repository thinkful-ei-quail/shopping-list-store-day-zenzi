import React from 'react';

import './App.css';

//create Change Color App

//create Count Click App


class ChangeColor extends React.Component {
  render() {
    return (
      <button className={this.props.colorClass} onClick={this.props.colorProp}>Change my Color!</button>
    )
  }
}

class CountClicks extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickProp}>Clicked {this.props.clickNumber} times</button>
    )
  }
}










class App extends React.Component {
  //create state/object (includes header color, count)
 constructor(props){
  super(props)
    this.state = {
      buttonColorClass: "red-class",
      buttonCount: 0,
    }
 }
 
//create function handler counting
handleColor = () => {
  console.log('changing color');
  this.setState({
    buttonColorClass: "purple-class"
  })
}

//create function handler color
handleClickCount = () => {
  this.setState({
    buttonCount: this.state.buttonCount + 1
  })
}
  render() {

    return (
      <div>
        <h1>Welcome to my test!</h1>
        <ChangeColor colorProp={this.handleColor} colorClass={this.state.buttonColorClass}/>
        <CountClicks clickProp={this.handleClickCount} clickNumber={this.state.buttonCount}/>
        <p>Thanks for pushing my buttons!</p>
      </div>
    )
  }
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//create website with header footer and main

//main should have 2 buttons 

//button 1 turns header red

//button 2 counts the number of times it is clicked

class ColorButton extends React.Component {
  render() {
    return (
      <button onClick = {this.props.colorBtn}>Change the Color</button>
    )
  }
}

class CountButton extends React.Component {
  render() {
    return (
      <button onClick = {this.props.btnCount}>You've clicked {this.props.clickAmount} times!</button>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className={this.props.colorHdr}>Welcome to my Website</header>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>Designed by Zenzi</footer>
    )
  }
}






class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0,
      headerClass: 'grey-header'
    }
  }
  handleColorClick = () => {
      this.setState({
        headerClass: 'red-header'
      }) 

  }



  handleClickCount = () => {
      this.setState({
        clickCount: this.state.clickCount + 1
      })
  }
  render(){
    
    return (
      <div>
        <Header colorHdr = {this.state.headerClass}/>
        <h4>Hello world! Just trying something new!</h4>
        <ColorButton colorBtn = {this.handleColorClick}/>
        <CountButton btnCount = {this.handleClickCount} clickAmount = {this.state.clickCount}/>
        <p>Details here</p>
        <Footer />
    </div>
    )
    
    
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
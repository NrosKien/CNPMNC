import React from 'react';
import './App.css';
import Login from './components/login'
import Register from './components/register'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingActive: true,
    }
  }

  changeState() {
    const { isLoggingActive } = this.state;
    if(isLoggingActive){
      this.righSide.classList.remove("right");
      this.righSide.classList.add("left");
    }
    else{
      this.righSide.classList.remove("left");
      this.righSide.classList.add("right");
    }

    this.setState((prevState) => ({isLoggingActive: !prevState.isLoggingActive}))
  }

  render() {
    const { isLoggingActive } = this.state;
    const current = isLoggingActive ? "Register" : "Login";
    const curretnActive = isLoggingActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoggingActive && <Login containerRef={(ref) => this.current = ref} />}
            {!isLoggingActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
          <RightSide current={current} containerRef={ref => this.righSide = ref} onClick={this.changeState.bind(this)} />
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">{props.current}</div>
    </div>
  )
}

export default App;

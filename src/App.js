import React from 'react';
import './App.css';
import { Howl, Howler } from 'howler';
import Alarm from './audio/winner.mp3';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      minute: 25,
      seconds: 0,
      toggleSession: true,
      breakLength: 5,
      sessionLength: 25,
      currentSession: true
    }
  }

  SoundPlay = () => {
    const sound = new Howl({
      src: [Alarm]
    });
    
    sound.play();
    Howler.volume(1);
  }

  startTimer = () => {
    if (this.state.toggleSession === true) {
      this.interval = setInterval(() => {
        const {minute, seconds} = this.state;

      
        if (seconds > 0) {
          this.setState({
            seconds: seconds - 1,
            
          });
        } else {
          this.setState({
            minute: minute - 1,
            seconds: 59,
            
          });
        }
        
        if (seconds === 0) {
          if (minute === 0) {
            if (this.state.toggleSession === false) {
              this.setState({
                minute: this.state.breakLength,
                seconds: 0,
                toggleSession: true,
                currentSession: false
              })
              this.SoundPlay();
            } else {
              this.setState({
                minute: this.state.sessionLength,
                seconds: 0,
                toggleSession: false,
                currentSession: true
              })
              this.SoundPlay();
            }
          }
        }
        

      }, 1000)
      
      this.setState({
        toggleSession: false
      });

    } 

    
  }

  pauseTimer = () => {
    clearInterval(this.interval);
    this.setState({
      toggleSession: true
    })
  }

  reset = () => {
    this.setState({
      minute: 25,
      seconds: 0,
      toggleSession: true,
      breakLength: 5,
      sessionLength: 25
    })
  }

  breakDecrement = () => {
    if (this.state.breakLength > 0) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    };
  }

  breakIncrement = () => {
    this.setState({
      breakLength: this.state.breakLength + 1
    })
  }

  sessionDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        minute: this.state.minute - 1
      })
    };
  }

  sessionIncrement =() => {
    this.setState({
      sessionLength: this.state.sessionLength + 1,
      minute: this.state.minute + 1
    })
  }


render(){
  return (
    <div className="App">
        <div id='container'>

        <div id='timer-container'>
          <div id='timerLabel-container'>
            <h1 id='timer-label'>{this.state.currentSession ? 'Work Time' : 'Break Time'}</h1>
          </div>

          <div id='timer'>
            <h1 id='current-time'>{this.state.minute}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h1>
          </div>
          
          <div id='button-container'>
            <button id='start' className='btn-animate' onClick={this.startTimer}>Start</button>
            <button id='stop' className='btn-animate' onClick={this.pauseTimer}>Pause</button>
            <button id='reset' className='btn-animate' onClick={this.reset}>Reset</button>
          </div>
        </div>


            <div id='break-div'>
              <h1 id='break-label'>Break Length</h1>
              <div className='info-flex'>
                <button className='increment-btn' onClick={this.breakDecrement}>-</button>
                <h1 id='break-length'>{this.state.breakLength}</h1>
                <button className='increment-btn' onClick={this.breakIncrement}>+</button>
              </div>
            </div>

            <div id='session-div'>
              <h1 id='session-label'>Session Length</h1>
              <div className='info-flex'>
                <button className='increment-btn' onClick={this.sessionDecrement}>-</button>
                <h1 id='session-length'>{this.state.sessionLength}</h1>
                <button className='increment-btn' onClick={this.sessionIncrement}>+</button>
              </div>
            </div>
        </div>


        
        

      </div>
    )
  }
}

export default App;





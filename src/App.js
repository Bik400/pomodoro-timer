import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      minutes: 25,
      seconds: 0,
      breakLength: 5,
      sessionLength: 25,
      toggleTimer: true,
    };
  }
  
  startTimer = () => {

     if (this.state.toggleTimer === true) {
      this.interval = setInterval(() => {

        const {minutes, seconds} = this.state;
        if (seconds > 0) {
          this.setState({
            seconds: seconds - 1,
            toggleTimer: true
          });
        } else {
          this.setState({
            minutes: minutes - 1,
            seconds: 59,
            toggleTimer: true
          });
        }

        if (seconds === 0) {
          if (minutes === 0) {
            if (this.state.toggleTimer === false) {
              this.setState({
                minutes: this.state.breakLength,
                seconds: 0,
                toggleTimer: true
              })
            } else {
              this.setState({
                minutes: this.state.minutes,
                seconds: 0,
                toggleTimer: false
              })
            }
            // let newSession = this.state.toggleTimer ? minutes : this.state.breakLength;

            // this.setState({
            //   minutes: newSession,
            //   seconds: 0,
            //   toggleTimer: !this.state.toggleTimer
            // });
          }
        } 
      }, 1000);
    }
  };

        // if (this.state.seconds === 0) {
        //   if (this.state.minutes !== 0) {
        //     this.setState({
        //       minutes: this.state.minutes - 1,
        //       seconds: 59
        //     })
        //   } else {

        //     let minutes = this.state.toggleTimer ? this.state.minutes : this.state.breakLength;
        //     let seconds = 59;

        //     this.setState({
        //       minutes: minutes,
        //       seconds: seconds,
        //       toggleTimer: !this.state.toggleTimer
        //     });


        //     // this.setState({
        //     //   minutes: this.state.breakLength,
        //     //   seconds: 0,
        //     //   toggleTimer: false
        //     // })
        //   }
        // } 



          // if (seconds > 0){
          //   this.setState({
          //     seconds: seconds - 1
          //   });
          // } else {
          //   this.setState({
          //     minutes: minutes - 1,
          //     seconds: 59
          //   })
          // }
        
        
          // if (seconds === 0){
          //   if (minutes === 0){
          //     this.setState({
          //       minutes: this.state.breakLength,
          //       seconds: 0,
          //       toggleTimer: false
          //     })
          //   }
          // }

        // if (seconds === 0){
        //   if (minutes === 0) {
        //     //  clearInterval(this.interval)

        //     this.setState({
        //       minutes: this.state.breakLength,
        //       seconds: 0
        //     });

        //     if (seconds === 0){
        //       this.setState({
        //         minutes: this.state.breakLength - 1,
        //         seconds: 59
        //       })
        //     } else {
        //       this.setState({
        //         seconds: seconds - 1
        //       });
        //     }
        //   }
        // }
 
      
      // this.setState({
      //   toggleTimer: false
      // });
    
    
    // if (this.state.toggleTimer === false){
    //   this.breakInterval = setInterval(() => {

    //     const {minutes, seconds} = this.state;
    //     // if (seconds === 0) {
    //     //   if (minutes === 0) {
    //     //     this.setState({
    //     //       minutes: this.state.breakLength,
    //     //       seconds: 0
    //     //     });
    //     //   }
    //     // }
        
  
    //     if (this.state.seconds === 0) {
    //       this.setState({
    //         minutes: this.state.breakLength - 1,
    //         seconds: 59
    //       });
    //     } else {
    //       this.setState({
    //         seconds: this.state.seconds - 1
    //       });
    //     }

    //     if (seconds === 0) {
    //       if (minutes === 0) {
    //         this.setState({
    //           minutes: this.state.secondRep,
    //           seconds: 0,
    //           toggleTimer: true
    //         })
    //       }
    //     }

    //   }, 1000);
     
    //   this.setState({
    //     toggleTimer: true
    //   });
    // }



  

  // breakTimer = () => {
  //   //if (this.state.toggleTimer === false) {
  //     this.interval = setInterval(() => {

  //       if (this.state.breakLength > 0){
  //         this.setState({
  //           minutes: this.state.breakLength,
  //           seconds: 0
  //         });
  //       }; 
        
  //       if (this.state.seconds > 0) {
  //         this.setState({
  //           seconds: this.state.seconds - 1
  //         });
  //       };

  //       if (this.state.seconds === 0){
  //         if (this.state.minutes === 0){
  //           clearInterval(this.interval)
  //         }
  //       } else {
  //         this.setState({
  //           minutes: this.state.minutes - 1,
  //           seconds: 59
  //         });
  //       }

  //     }, 1000);

  //     this.setState({
  //       toggleTimer: true
  //     })
  //   //}
  // }

  pauseTimer = () => {
    clearInterval(this.interval);
    this.setState({
      toggleTimer: true
    });
  };

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      minutes: 25,
      seconds: 0,
      breakLength: 5,
      sessionLength: 25,
      toggleTimer: true
    });
  };

  breakDecrement = () => {
    if (this.state.breakLength > 0){
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    } else {
      this.setState({
        breakLength: 0
      });
    };
  };

  breakIncrement = () => {
    this.setState({
      breakLength: this.state.breakLength + 1
    })
  }

  sessionDecrement = () => {
    if (this.state.sessionLength > 1){
      this.setState({
        minutes: this.state.minutes - 1,
        sessionLength: this.state.sessionLength - 1
      })
    } else {
      this.setState({
        minutes: 1,
        sessionLength: 1
      });
    };
  };

  sessionIncrement = () => {
    this.setState({
      minutes: this.state.minutes + 1,
      sessionLength: this.state.sessionLength + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div id='container'>
            <div id='break-div'>
              <h1 id='break-label'>Break Length</h1>
              <div className='info-flex'>
                <button id='break-decrement' onClick={this.breakDecrement}>-</button>
                <h1 id='break-length'>{this.state.breakLength}</h1>
                <button id='break-increment' onClick={this.breakIncrement}>+</button>
              </div>
            </div>

            <div id='session-div'>
              <h1 id='session-label'>Session Length</h1>
              <div className='info-flex'>
                <button id='session-decrement' onClick={this.sessionDecrement}>-</button>
                <h1 id='session-length'>{this.state.sessionLength}</h1>
                <button id='session-increment' onClick={this.sessionIncrement}>+</button>
              </div>
            </div>
        </div>


        <div id='timer-container'>
          <div id='timerLabel-container'>
            <h1 id='timer-label'>Session</h1>
          </div>

          <div id='timer'>
            <h1>{this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</h1>
          </div>
          
          <div id='button-container'>
            <button id='start' onClick={this.startTimer}>Start</button>
            <button id='stop' onClick={this.pauseTimer}>Pause</button>
            <button id='reset' onClick={this.reset}>Reset</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

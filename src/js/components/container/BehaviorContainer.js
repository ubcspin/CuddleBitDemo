/**
 * Created by Lo on 2018-04-06.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../../css/bootstrap.min.css';
import '../../../css/style.css';

const io = require('socket.io-client');
const socket = io.connect("http://localhost:8080");

socket.on('init', function() {
  socket.emit('start', 'start');
});

class BehaviorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seo_title: "",
      socket: socket,
      behavior: 1,
      behaviorNum: 20
    };

    this.handleChange = this.handleChange.bind(this);
    this.reload       = this.reload.bind(this);
    this.playBehaviour= this.playBehaviour(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  reload(b) {
    console.log("here is the result..." + b);
    this.setState({behavior: b});
  }

  playBehaviour() {

    socket.emit("robot", this.state.behavior );

  }

  render() {
    const { seo_title, behaviorNum, behavior } = this.state;

    var menu = [];
    for (var i = 1; i <= behaviorNum; i++) {

      menu.push(<li><a href="#" onClick={this.reload.bind(this,i)}>Behaviour {i}</a></li>);
    }

    menu[behavior - 1] = <li class="active"><a href="#">Behaviour {behavior}</a></li>;
    var waveform = "../bhv/" + behavior + ".png";

    return (
        <div id="behaviorContainer">
          <header>
            <div>
              <h1 class="subtitles"> <span>CuddleBit Behaviours</span></h1>
            </div>

            <div class="absolute-right align-top">
              <button class="button2 right">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                Project Information
              </button>
            </div>


          </header>

          <nav class="custom-navbar navbar-inverse align-right">
            <div class="container-fluid" >

              <ul class="custom-nav nav-pills nav-stacked" role="tablist">
                <li><a href="index.html">SHARE YOUR STORY</a></li>
                <li class="active"><a href="behaviour.html">SEE OUR BEHAVIOURS</a></li>
              </ul>
            </div>
          </nav>

          <nav class="custom-navbar navbar-inverse">
            <div class="container-fluid" >

              <ul class="behaviour-menu nav-pills nav-stacked" role="tablist">
                {menu}
              </ul>
            </div>
          </nav>


          <div class="mainblock">
            {/*Macaron Editor*/}
            <div name="main" id="maineditor" ref="mainEditorRef">
              <img class='horizontal-center' src={waveform}/>
              {/*<button class="button2" onClick={this.playBehaviour}> Play </button>*/}
            </div>

              {/*<div class="plotblock1">*/}
                {/*<img src="images/mse.png"/>*/}
                  {/*<button class="button2">*/}
                    {/*<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                    {/*What is MSE?*/}
                  {/*</button>*/}
              {/*</div>*/}

              {/*<div class="plotblock2">*/}
                {/*<img src="images/mse.png"/>*/}
                  {/*<button class="button2">*/}
                    {/*<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                    {/*What is FFT?*/}
                  {/*</button>*/}
              {/*</div>*/}

              {/*<div class="plotblock3">*/}
                {/*<img src="images/mse.png"/>*/}
                  {/*<button class="button2">*/}
                    {/*<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                    {/*What is Variance?*/}
                  {/*</button>*/}
              {/*</div>*/}

              <div class="rateblock">
                <h3>What emotions do you think this behaviour is displaying?</h3>
                <button class="button2">
                  Happy
                </button>
                <button class="button2">
                  Sad
                </button>

                <h3>Type yours</h3>

              </div>
          </div>
        </div>
    );
  }
}
export default BehaviorContainer;
const wrapper = document.getElementById("behaviorContainer");
wrapper ? ReactDOM.render(<BehaviorContainer />, wrapper) : false;
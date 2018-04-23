/**
 * Created by Lo on 2018-04-06.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../../css/bootstrap.min.css';
import '../../../css/style.css';
import Consent from "../Consent.js";
import Bars from "react-bars";


const io = require('socket.io-client');
const socket = io.connect("http://localhost:8080");

socket.on('init', function() {
  socket.emit('start', 'start');
});

class BehaviorContainer extends Component {
  constructor(props) {
    super(props);

    var edata =
    this.state = {
      seo_title: "",
      socket: socket,
      behavior: 1,
      behaviorNum: 18,
      show_consent: false,
      show_info: false,
      show_mse: false,
      rated: false,
      testData:[
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 2},
          {label:'neutral', value:7},
          {label:'somewhat negative', value:0},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 0},
          {label:'neutral', value:6},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 4},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:1},
          {label:'extremely negative', value:3}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 0},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:5},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:0},
          {label:'somewhat negative', value:2},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 5},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:1},
          {label:'extremely negative', value:0}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 4},
          {label:'neutral', value:2},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:0}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 1},
          {label:'neutral', value:4},
          {label:'somewhat negative', value:4},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 2},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:2},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:2}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 4},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:1},
          {label:'extremely negative', value:3}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 0},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:5},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:0},
          {label:'somewhat negative', value:2},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 5},
          {label:'neutral', value:3},
          {label:'somewhat negative', value:1},
          {label:'extremely negative', value:0}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 4},
          {label:'neutral', value:2},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:0}],
        [
          {label:'extremely positive', value:0},
          {label:'somewhat positive', value: 1},
          {label:'neutral', value:4},
          {label:'somewhat negative', value:4},
          {label:'extremely negative', value:1}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 2},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:2},
          {label:'extremely negative', value:4}],
        [
          {label:'extremely positive', value:1},
          {label:'somewhat positive', value: 3},
          {label:'neutral', value:1},
          {label:'somewhat negative', value:3},
          {label:'extremely negative', value:2}]
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.reload       = this.reload.bind(this);
    this.playBehaviour= this.playBehaviour.bind(this);
    this.toggleConsent= this.toggleConsent.bind(this);
    this.toggleInfo   = this.toggleInfo.bind(this);
    this.toggleMSE   = this.toggleMSE.bind(this);
    this.toggleRate  = this.toggleRate.bind(this);
    this.turnOffRate = this.turnOffRate.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  reload(b) {
    console.log("here is the result..." + b);
    this.setState({behavior: b});
    this.turnOffRate();
  }

  toggleRate(i) {
    // console.log(this.state.testData);
    // var newData = this.state.testData;
    // newData[i] = {label: newData[i].label, value: newData[i].value + 1};
    // newData[newData.length - 1] = {label: newData[newData.length - 1].label, value: newData[newData.length - 1].value + 1};
    this.setState(
        {rated:true
        });

  }

  turnOffRate() {
    this.setState({rated: false})
  }

  playBehaviour() {

    socket.emit("robot", this.state.behavior );
    console.log("playing behavior");

  }

  toggleConsent() {
    if (this.state.show_consent == true) {
      this.setState({ show_consent: false});
    } else {
      this.setState({ show_consent: true});
    }
  }

  toggleInfo() {
    if (this.state.show_info == true) {
      this.setState({ show_info: false});
    } else {
      this.setState({ show_info: true});
    }
  }

  toggleMSE() {
    if (this.state.show_mse == true) {
      this.setState({ show_mse: false});
    } else {
      this.setState({ show_mse: true});
    }
    console.log(this.state.show_mse);
  }

  render() {
    const { seo_title, behaviorNum, behavior } = this.state;

    var menu = [];
    for (var i = 1; i <= behaviorNum; i++) {

      menu.push(<li><a href="#" onClick={this.reload.bind(this,i)}>Behaviour {i}</a></li>);
    }

    menu[behavior - 1] = <li class="active"><a href="#">Behaviour {behavior}</a></li>;
    var waveform = "../bhv/" + behavior + ".png";
    var mse = "../mse/" + behavior +".png";
    var consent = this.state.show_consent? <Consent/> : <div></div>;
    var rate = <div/>;
    if (this.state.rated == false) {
      rate = <div class="ratebtn">
        <button class="button2" onClick={this.toggleRate.bind(this,0)}>
          Extremely positive
        </button>
        <button class="button2" onClick={this.toggleRate.bind(this,1)}>
          Somewhat positive
        </button>
        <button class="button2" onClick={this.toggleRate.bind(this,2)}>
          Neutral
        </button>
        <button class="button2" onClick={this.toggleRate.bind(this,3)}>
          Somewhat negative
        </button>
        <button class="button2" onClick={this.toggleRate.bind(this,4)}>
          Extremely negative
        </button>
        </div>
    } else {
      rate = <div className="demo">
        <Bars data={this.state.testData[this.state.behavior]} makeUppercase={true}/>
      </div>
    }

    var info = <div/>
    if (this.state.show_info == true) {
      info =  <div class="popup" style={{position: 'absolute', top:'30%', right:"5%", height:"850px" }}>
        <p>  Social robots need to express and understand emotion. Humans ascribe emotion easily to objects: even extremely simple movements can seem emotional. However, the valence (positivity/negativity) of an emotion expression is often ambiguous when taken out of context. In this project, we explored how both the movement complexity and and narrative context impact how the valence of a robot behaviour.
          <br/>
          Our robots, called the CuddleBits, are simple, fuzzy, balls of fur that breathe using a single motor. The CuddleBits are designed to explore how humans emotionally interact via the sense of touch. In previous work, we found that they could consistently express high/low activation, but valence was more difficult. This work drills down on valence, exploring the tension between signal complexity and narrative framing.
        </p>
      </div>
    }

    var mse_info = <div/>
    if (this.state.show_mse == true) {
      mse_info =  <div class="popup" style={{position: 'absolute', top:'15%', right:"10%" }}>
        <p> MSE is originally used to investigate complexity of physiological signals,
          such as heart rate signals. It examines whether a signal is structurally
          complex and dynamic. E.g. Imagine a white noise, which has a big variance
          value. Structurally it’s not very complicated, because every part of the
          white noise series is almost equally complicated. That means when the
          series is perceived by human, it doesn’t show meaningful changes over time.
          Multi scale Entropy partitions a signal by varying time scale and measure
          the complexity level for each scale. For detailed instruction, visit <a href="https://physionet.org/physiotools/mse/tutorial/"><nobr>here</nobr></a> .</p>
      </div>
    }

    return (
        <div id="behaviorContainer">
          <header>
            <div>
              <h1 class="subtitles"> <span>CuddleBit Behaviours</span></h1>
            </div>

            <div class="absolute-right align-top">
              <button class="button2 right" onClick={this.toggleInfo}>
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                Project Information
              </button>
            </div>
            {info}

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

            <button class="button2" style={{position: 'absolute', right: '0%', top: '180px'}} onClick={this.playBehaviour}> Play </button>
            <div name="main" id="maineditor" ref="mainEditorRef">
              <img class='horizontal-center' src={waveform}/>
              </div>

            <div class="plotblock1">
              <h2>How complex is this behaviour?</h2>
              <img src={mse}/>
              <button class="button2" onClick={this.toggleMSE}>
                <span class="glyphicon glyphicon-plus" aria-hidden="true" ></span>
                What is MSE?
              </button>
              {mse_info}

              {/*<img src="images/mse.png"/>*/}
              {/*<button class="button2">*/}
                {/*<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                {/*What is FFT?*/}
              {/*</button>*/}
            </div>

            {/*<div class="consentblock horizontal-center" style={{top:'130%'}} >*/}
              {/*<button onClick={this.toggleConsent}>Consent Form</button>*/}
              {/*{consent}*/}
              {/*</div>*/}

              <div class="plotblock2">
                <h2>What emotion does this behavior express?</h2>
                {rate}


              </div>


              {/*<div class="plotblock3">*/}
                {/*<img src="images/mse.png"/>*/}
                  {/*<button class="button2">*/}
                    {/*<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>*/}
                    {/*What is Variance?*/}
                  {/*</button>*/}
              {/*</div>*/}

              {/*<div class="rateblock">*/}
                {/*<h3>What emotions do you think this behaviour is displaying?</h3>*/}
                {/*<button class="button2">*/}
                  {/*Happy*/}
                {/*</button>*/}
                {/*<button class="button2">*/}
                  {/*Sad*/}
                {/*</button>*/}

                {/*<h3>Type yours</h3>*/}

              {/*</div>*/}
          </div>
        </div>
    );
  }
}
export default BehaviorContainer;
// const wrapper = document.getElementById("behaviorContainer");
// wrapper ? ReactDOM.render(<BehaviorContainer />, wrapper) : false;
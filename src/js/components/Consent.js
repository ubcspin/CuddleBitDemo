import React, { Component } from "react";
import '../../css/bootstrap.min.css';
import '../../css/style.css';

class Consent extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      consent: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }


  render() {
    const { seo_title } = this.state;
    return (
        <div id="consent" style={{position:'absolute', top: '10%'}}>
          <div class="header">Consent Form Mockup</div>
          <h2>Introduction and Related Work</h2>
          <p>  Interactions between humans and animal-form social robots have been shown to provide cognitive and emotional benefits in older adults. Even something as simple as steady state haptic feedback, or simulated breathing, can create a calming influence. To explore the interaction between narrative framing and an emotive zoomorphic robot, we use simple robotic prototypes boasting 1-Degree of Freedom motion capabilities. This affords us both an affective haptic display in the robot's behaviour, as well as a platform for understanding how humans imbue robots with emotion capabilities.
          <br/>
           This study is being conducted as part of a Human-Computer Interaction conference demonstration where participants are conference-goers.</p>
          <input className="toggle-consent" type="checkbox"  checked={this.state.consent} />
        </div>
    );
  }
}
export default Consent;
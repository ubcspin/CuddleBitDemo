/**
 * Created by Lo on 2018-04-06.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../../css/bootstrap.min.css';
import '../../../css/style.css';
import VTEditor from "../presentational/vteditor.jsx";

class BehaviorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seo_title: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {

    const { seo_title } = this.state;


    return (
        <div id="app">
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
                <li class="active"><a href="#">Behaviour 1</a></li>
                <li><a href="#">Behaviour 2</a></li>
                <li><a href="#">Behaviour 2</a></li>
                <li><a href="#">Behaviour 2</a></li>
                <li><a href="#">Behaviour 2</a></li>
                <li><a href="#">Behaviour 2</a></li>
                <li><a href="#">Behaviour 2</a></li>
              </ul>
            </div>
          </nav>

          <div class="mainblock">
            {/*Macaron Editor*/}
            <div name="main" id="maineditor" ref="mainEditorRef">
            {/*<VTEditor/>*/}
            </div>

              <div class="plotblock1">
                <img src="images/mse.png"/>
                  <button class="button2">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    What is MSE?
                  </button>
              </div>

              <div class="plotblock2">
                <img src="images/mse.png"/>
                  <button class="button2">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    What is FFT?
                  </button>
              </div>

              <div class="plotblock3">
                <img src="images/mse.png"/>
                  <button class="button2">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    What is Variance?
                  </button>
              </div>

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
// const wrapper = document.getElementById("app");
// wrapper ? ReactDOM.render(<BehaviorContainer />, wrapper) : false;
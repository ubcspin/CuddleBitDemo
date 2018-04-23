import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../../css/bootstrap.min.css';
import '../../../css/style.css';
import BehaviorContainer from "./BehaviorContainer.js";

class StoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      nav_behavior: false,
      nav_story: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.toBehavior   = this.toBehavior.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  toBehavior() {
    this.setState({
      nav_behavior: true,
      nav_story: false
    })
    return (<BehaviorContainer/>)
  }


  render() {
    const { seo_title } = this.state;

    if (this.state.nav_behavior == true) {
      return <BehaviorContainer/>;
    } else {
      return (
          <div id="storyContainer">
            <header>


              <div class="horizontal-center vertical-center">
                <h1 class="titles"> <span>CuddleBit</span></h1>
                <h2 class="body">A website for affective robot behaviours</h2>

                <a href="https://twitter.com/intent/tweet?button_hashtag=CuddleBit&ref_src=twsrc%5Etfw" class="button" data-show-count="false">
                  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  Tell us your story</a>

                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

              </div>
            </header>

            <nav class="custom-navbar navbar-inverse align-right">
              <div class="container-fluid" >

                <ul class="custom-nav nav-pills nav-stacked" role="tablist">
                  <li class="active"><a>SHARE YOUR STORY</a></li>
                  <li><a onClick={this.toBehavior}>SEE OUR BEHAVIOURS</a></li>
                </ul>
              </div>
            </nav>

            <section class="feed-wrap">
              <div class="container">
                <div class="col-xs-12">
                  <div class="feed-content">
                    <h3>See What Has Been Shared</h3>

                    <div class="row photos-wrap">

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="photo-box">
                          {/*<div className="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171465335246" data-did="0e8788b36aeb2aa530777706c0f29edfb719fc65"><a href="https://hasumonn.tumblr.com/post/171465335246/pocarisuetto-this-is-a-test-the-author-also">https://hasumonn.tumblr.com/post/171465335246/pocarisuetto-this-is-a-test-the-author-also</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>        <div className="row">*/}
                          {/*</div>*/}
                        </div>

                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="photo-box">
                          {/*<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171788469906" data-did="96ec1eeaad8da7ab3aacf76eac87c69c5d923773"><a href="https://hasumonn.tumblr.com/post/171788469906/new-story">https://hasumonn.tumblr.com/post/171788469906/new-story</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>*/}
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="photo-box">
                          {/*<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171788493566" data-did="86c40cde69febfaf0be72e129a6dae51672f083a"><a href="https://hasumonn.tumblr.com/post/171788493566/longer-story">https://hasumonn.tumblr.com/post/171788493566/longer-story</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>*/}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
            <iframe src="http://www.activitywalls.com/?h=cuddleBit&c=fc1fff666" title="iframe example 1" width="100%" height="700px"
                    frameborder="0"
                    scrolling="yes"
                    marginheight="0"
                    marginwidth="0" >
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
      );
    }

  }
}
export default StoryContainer;
const wrapper = document.getElementById("storyContainer");
wrapper ? ReactDOM.render(<StoryContainer />, wrapper) : false;
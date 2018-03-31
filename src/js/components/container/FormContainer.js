import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import '../../../css/bootstrap.min.css';
import '../../../css/style.css';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
        <section className="feed-wrap">
          <div className="container">
            <div className="col-xs-12">
              <div className="feed-content">
                <h3>See What Has Been Shared</h3>
                <div className="row photos-wrap">

                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="photo-box">
                      <div className="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171465335246" data-did="0e8788b36aeb2aa530777706c0f29edfb719fc65"><a href="https://hasumonn.tumblr.com/post/171465335246/pocarisuetto-this-is-a-test-the-author-also">https://hasumonn.tumblr.com/post/171465335246/pocarisuetto-this-is-a-test-the-author-also</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>        <div class="row">
                    </div>
                    </div>

                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="photo-box">
                      <div className="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171788469906" data-did="96ec1eeaad8da7ab3aacf76eac87c69c5d923773"><a href="https://hasumonn.tumblr.com/post/171788469906/new-story">https://hasumonn.tumblr.com/post/171788469906/new-story</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="photo-box">
                      <div className="tumblr-post" data-href="https://embed.tumblr.com/embed/post/eV1HgeD4Y1zx7Cv54ihmng/171788493566" data-did="86c40cde69febfaf0be72e129a6dae51672f083a"><a href="https://hasumonn.tumblr.com/post/171788493566/longer-story">https://hasumonn.tumblr.com/post/171788493566/longer-story</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
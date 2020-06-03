import React, { Component } from "react";
import Axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
  }

  getPortfolioItem() {
    Axios.get(
      `https://chrisnickel.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
      { withCredentials: true }
    )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("getPortfolioItem error", error);
      });
  }
  componentWillMount() {
    this.getPortfolioItem();
  }

  render() {
    return (
      <div>
        <h1>Portfolio Detail for {this.props.match.params.slug}</h1>
      </div>
    );
  }
}

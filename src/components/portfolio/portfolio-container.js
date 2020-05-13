import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioConainer extends Component {
  constructor() {
    super()
    console.log("Portfolio container has rendered");
  }

  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

    return data.map(item => {
      return <PortfolioItem title={item}/>;
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio Items Go Here...</h2>

        {this.portfolioItems()}
      </div>
    )
  }
}
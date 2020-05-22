import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';
export default class PortfolioManager extends Component {
	constructor() {
		super();
		this.state = {
			portfolioItems: [],
		};
		this.handleFormSubmissionError = this.handleFormSubmissionError.bind(
			this
		);
		this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
			this
		);
	}

	handleSuccessfulFormSubmission(portfolioItems) {
		//TODO
		// update portfolioItems state
		// and add the portfolioItem to the list
	}

	handleFormSubmissionError(error) {
		console.log();
	}

	getPortfolioItems() {
		axios
			.get(
				'https://chrisnickel.devcamp.space/portfolio/portfolio_items',

				{ withCredentials: true }
			)
			.then((response) => {
				this.setState({
					portfolioItems: [...response.data.portfolio_items],
				});
				console.log(response);
			})
			.catch((error) => {
				console.log('error in getPortfolioItems', error);
			});
	}
	componentDidMount() {
		this.getPortfolioItems();
	}
	render() {
		return (
			<div className='portfolio-manager-wrapper'>
				<div className='left-column'>
					<h1>
						<PortfolioForm
							handleSuccessfulFormSubmission={
								this.handleSuccessfulFormSubmission
							}
							handleFormSubmissionError={
								this.handleFormSubmissionError
							}
						/>
					</h1>
				</div>
				<div className='right-column'>
					<PortfolioSidebarList data={this.state.portfolioItems} />
				</div>
			</div>
		);
	}
}

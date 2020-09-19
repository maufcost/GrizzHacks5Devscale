import React from "react";
import { Link } from "@reach/router";

import {
	FaTrophy,
	FaAward,
	FaSearchPlus
} from "react-icons/fa";

class Dashboard extends React.Component
{

	render()
	{
		return (
			<section className="right">

				<img className="right-title-top" src="logo_for_dark1.png" alt="White Devscale"/>
				<br/>
				<img className="right-title" src="analyze_and_win.png" alt="Analyze and win"/>
				<p className="right-title-bottom">More than 15,000 Hackathon projects analyzed to increase your chances of winning your next competition</p>

				<section className="btns">
					<Link to="/analysis" className="big-btn">
						<div id="first" className="big-btn-content">
							<FaTrophy className="icons"/>
							<div className="btn-gist">
								<p className="btn-title">Analyze</p>
								<p className="description">Get insights into your project submission and see how close you're to winning.</p>
							</div>
						</div>
					</Link>

					<Link to="/nowhere" className="big-btn">
						<div id="second" className="big-btn-content">
							<FaAward className="icons"/>
							<div className="btn-gist">
								<p className="btn-title">Winner Statistics</p>
								<p className="description">Explore common used words and expressions among Hackathon winners.</p>
							</div>
						</div>
					</Link>

					<Link to="/nowwhere" className="big-btn">
						<div id="third" className="big-btn-content">
							<FaSearchPlus className="icons"/>
							<div className="btn-gist">
								<p className="btn-title">More</p>
								<p className="description">Dive even further into your data. Let us show you.</p>
							</div>
						</div>
					</Link>
				</section>

			</section>
		)
	}
}

export default Dashboard;

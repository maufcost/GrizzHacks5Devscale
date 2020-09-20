import React from 'react';
import { Router, Link } from "@reach/router"

import {
	FaTrophy,
	FaAward,
	FaSearchPlus,
	FaTerminal,
	FaHome,
	FaCat
} from "react-icons/fa";

import Dashboard from "./Dashboard";
import Analysis from "./Analysis";
import Results from "./Results";

import "./App.css";

class App extends React.Component
{

	render()
	{
		return (
			<div className="react-general">
				<header>
					<img className="logo" src="logo_for_white.png" alt="Devscale"/>
					<nav>
						<ul>
							<li><Link to="/"><FaHome className="nav-icons" />Home</Link></li>
							<li><a href="/nowhere"><FaTrophy className="nav-icons" />Analyze</a></li>
							<li><a href="/nowhere"><FaAward className="nav-icons" />Winner Statistics</a></li>
							<li><a href="/nowhere"><FaSearchPlus className="nav-icons" />More</a></li>
							<li><a href="/nowhere"><FaCat className="nav-icons" />About</a></li>
						</ul>
					</nav>
				</header>

				<main>
					<section className="left">

						<section className="user-info">
							<img className="user-img" src="huahua.jpg" alt="User's Profile"/>
							<p className="username">Nathan Wilk</p>
							<img className="country" src="usa_flag.png" alt="Country"/>
							<span className="online-icon"></span>
						</section>

						<section className="left-sidebar">

							<p className="left-sidebar-title">
								<FaTerminal className="icon-top-left"/>
								Last Project Analysis
							</p>

							<span className="separator"></span>

							<div className="box">
								<img className="box-img" src="mproj1.png" alt="Project"/>
								<div className="box-gist">
									<div className="box-additional">
										<p className="box-title">My Swag Space</p>
										<p className="box-time">9:45pm</p>
									</div>
									<p className="box-desc">Empowering Member Engagement in Hackathons and events with a social platform of digital swag.</p>
								</div>
							</div>

							<span className="separator"></span>

							<div className="box">
								<img className="box-img" src="mproj2.png" alt="Project"/>
								<div className="box-gist">
									<div className="box-additional">
										<p className="box-title">Cinnamon Roll Dungeons</p>
										<p className="box-time">12:01am</p>
									</div>
									<p className="box-desc">A game that promotes healthy eating by presenting
									battles with unhealthy enemies based on a dice.</p>
								</div>
							</div>

							<span className="separator"></span>

							<div className="box">
								<img className="box-img" src="mproj3.png" alt="Project"/>
								<div className="box-gist">
									<div className="box-additional">
										<p className="box-title">Sticker Chain</p>
										<p className="box-time">10:05am</p>
									</div>
									<p className="box-desc">Blockchain-powered platform to collect hacking
									stickers and badges with transactions in Hedera.</p>
								</div>
							</div>

							<span className="separator"></span>

							<div className="box">
								<img className="box-img" src="mproj4.png" alt="Project"/>
								<div className="box-gist">
									<div className="box-additional">
										<p className="box-title">Wavebeat</p>
										<p className="box-time">1:45pm</p>
									</div>
									<p className="box-desc">Using brain wave reading to identify songs that improve performance on quantitative reasoning and problem-solving tasks.</p>
								</div>
							</div>

							<span className="separator"></span>

							<div className="box">
								<img className="box-img" src="mproj5.png" alt="Project"/>
								<div className="box-gist">
									<div className="box-additional">
										<p className="box-title">I Like to Move it Move it</p>
										<p className="box-time">9:04am</p>
									</div>
									<p className="box-desc">A sustainable peer-to-peer transportation app to make you move it move it</p>
								</div>
							</div>
						</section>
					</section>

					<Router>
						<Dashboard path="/" />

						<Analysis path="/analysis" />

						<Results path="/results" />
					</Router>
				</main>
			</div>
		)
	}
}

export default App;

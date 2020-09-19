import React from "react";

class Dashboard extends React.Component
{

	render()
	{
		return (
			<div className="react-general">
				<header>
					<p>Devscale?!</p>
					<nav>
						<ul>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
						</ul>
					</nav>
				</header>

				<main>
					<section className="left">

						<section className="user-info">
							<img className="user-img" src="huahua.jpg" alt="User's Profile"/>
							<p className="username">Nathan Wilk</p>
							<img className="country" src="usa_flag.png" alt="Country"/>
						</section>

						<section className="left-sidebar">

							<p className="left-sidebar-title">Last Project Analysis</p>

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
						</section>
					</section>

					<section className="right">

						<a href="#" className="big-btn">
							<div id="first" className="big-btn-content">
								<p className="btn-title"></p>
								<p className="description"></p>
							</div>
						</a>

						<a href="#" className="big-btn">
							<div id="second" className="big-btn-content">
								<p className="btn-title"></p>
								<p className="description"></p>
							</div>
						</a>

						<a href="#" className="big-btn">
							<div id="third" className="big-btn-content">
								<p className="btn-title"></p>
								<p className="description"></p>
							</div>
						</a>

					</section>
				</main>

			</div>
		)
	}
}

export default Dashboard;

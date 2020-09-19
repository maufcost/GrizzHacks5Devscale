import React from 'react';
import { Router } from "@reach/router"

import Dashboard from "./Dashboard";
import "./App.css";

class App extends React.Component
{

	render()
	{
		return (
			<div className="react-general">
				<Router>
					<Dashboard path="/" />
				</Router>
			</div>
		)
	}
}

export default App;

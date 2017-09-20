import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div>
				<div className="row expanded">
					<div className="small-12 columns">
						<Header />
					</div>
				</div>
				{this.props.children}
                <section className="footer">
                    <Footer />
                </section>
			</div>
		);
	}
}

export default App;

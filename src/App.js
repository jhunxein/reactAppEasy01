import React, { useRef, useEffect } from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from './images/logo.svg';
import mockups from './images/illustration-mockups.svg';

function App() {
	const refContainer = useRef(null);

	function handleResize() {
		const height = window.innerHeight;
		refContainer.current.style.height = `${height}px`;
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="container" ref={refContainer}>
			<header>
				<a href="/" className="logo">
					<img src={logo} alt="..." />
				</a>
			</header>
			<main className="grid">
				<div className="left">
					<img src={mockups} alt="..." className="mockup" />
				</div>
				<div className="rigth">
					<h1>build the community your fans will love</h1>
					<p>
						Huddle re-images the way we build communities. You have a voice, but so
						does your audience. Create connections with your users as you engage in
						genuine discussions.
					</p>
					<button type="button" className="cta">
						register
					</button>
					<div className="social-icons">
						<div className="wrapper">
							<a href="https://www.facebook.com" title="Visit our facebook page">
								<FaFacebook />
							</a>
							<a
								href="https://www.twitter.com"
								title="Take a look on our latest tweets"
							>
								<FaTwitter />
							</a>
							<a href="https://instagram.com" title="Be updated in our instagram post">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;

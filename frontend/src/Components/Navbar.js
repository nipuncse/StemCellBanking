import React from "react";
import classes from '../Css/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.navbar__one}>
				<div className={classes.navbar__one_one}>
					<img src="/media/logo.svg" alt="Logo" />
					<div className={classes.logo_head}>
						<div><h4>Stem <span style={{ color: '#df9ff7' }}>Cell</span></h4></div>
						<div className={classes.bank}>
							<p>B</p>
							<p>A</p>
							<p>N</p>
							<p>K</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.navbar__one_two}>
				<ul>
					<li>About</li>
					<li>Team</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
			</div>
			{/* <div className={classes.navbar__two}>
				<button>Sign In</button>
				<button className={classes.get_started}>Get Started</button>
			</div> */}
		</div>
	)
}

export default Navbar;
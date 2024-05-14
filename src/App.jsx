// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style";

import {
	NavBar,
	Home,
	Billing,
	Cards,
	Business,
	Footer,
	Testimonials,
	CTAButtons,
	Clients
} from "./components/index";

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<NavBar />
			</div>
		</div>

		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Home />
			</div>
		</div>

		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Clients />
				<Business />
				<Billing />
				<Cards />
				<Testimonials />
				<CTAButtons />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;

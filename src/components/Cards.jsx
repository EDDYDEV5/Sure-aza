// eslint-disable-next-line no-unused-vars
import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Cards = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className="sm:block hidden" />
					in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					entore veritatis et quasi architecto beatae vitae dicta sunt explicabo
					unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium.
				</p>

        <Button styles="mt-10" />
			</div>

      {/* Right Side */}
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
		</section>
	);
};

export default Cards;

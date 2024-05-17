// eslint-disable-next-line no-unused-vars
import React from "react";
import { twoatms } from "../assets";
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
				tenetur, error obcaecati ipsam magni esse dolor possimus atque eaque aut porro itaque unde ad asperiores illum excepturi recusandae. Minus repudiandae, rem veritatis neque laudantium quisquam? Provident quia blanditiis 
				</p>

        <Button styles="mt-10" />
			</div>

      {/* Right Side */}
      <div className={layout.sectionImg}>
        <img src={twoatms} alt="card" className="w-[100%] h-[80%]  m-2 rounded-xl  shadow-lg shadow-purple-900" />
      </div>
		</section>
	);
};

export default Cards;

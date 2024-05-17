// eslint-disable-next-line no-unused-vars
import React from "react";
import { features } from "../contants";
import styles, { layout } from "../style";
import Button from "./Button";



// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, content, index }) => {
	return (
		<div
			className={`flex flex-row p-6 rounded-[20px] ${
				index !== features.length - 1 ? "mb-6" : "mb-0"
			}
        feature-card`}
		>
			
			<div
				className={`w-[55px] h-[55px] rounded-full ${styles.flexCenter} bg-dimBlue`}
			>
				<img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
			</div>

			<div className="flex-1 flex flex-col ml-3">
				<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
					{title}
				</h4>
				<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
					{content}
				</p>
			</div>
		</div>
	);
};

const Business = () => {
	return (
		<section id="features" className={layout.section}>
			<div className={layout.sectionInfo}>
			
				<h2 className={styles.heading2}>
				Let's handle your finace, <br className="sm:block hidden" />
					while you do they business
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button styles="mt-7 rounded-md" />
			</div>

			{/* Right side */}
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((feature, index) => (
					<FeatureCard key={feature.id} {...feature} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;

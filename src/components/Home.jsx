// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../style";
import { one } from "../assets";

const Home = () => {
	return (
		<section
			id="home"
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				

				<div className="flex flex-row justify-between items-center w-full">
					<h1
						className="flex-1 font-poppins font-semibold sm:text-[72px] text-[40px] text-white
									ss:leading-[60px] xs:leading-[60px] md:leading-[80px]"
					>
						We've Got
						<br /> <span className="text-gradient">The Best</span> <br />{" "}
					</h1>
					
				</div>

				<h1
					className="font-poppins font-semibold sm:text-[68px] text-[40px] text-white
								ss:leading-[60px] xs:leading-[60px] md:leading-[80px] w-full"
				>
					Payment Method.
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We exmaine annual percentage rates,
					annual fees.
				</p>
			</div>

			{/* Right side */}
			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={one}
					alt="billing"
					className="w-[100%] h-[80%] relative z-[5] p-4 md:p-0 rounded-3xl md:mr-16 shadow-lg shadow-purple-900"
				/>

				<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
				<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
			</div>
		</section>
	);
};

export default Home;

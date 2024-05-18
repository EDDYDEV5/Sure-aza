
import React from "react";


const Button = ({styles}) => {
	return (
		<button
			type="button"
			className={`py-3 px-6 bg-blue-gradient font-poppins font-medium 
    text-[18px] text-dimWhite outline-none ${styles} rounded-[10px]`}
		>
      Get Started
    </button>
	);
};

export default Button;

import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
	return (
		<div className="flex items-center justify-between gap-5 px-4 py-2 text-black rounded-full max-w-36 bg-zinc-100">
			<span className="text-sm font-medium">{title}</span>
			<IoIosReturnRight />
		</div>
	);
};

export default Button;

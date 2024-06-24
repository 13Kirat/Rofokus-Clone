import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, project, para, headline, heading, hover = "false" }) => {
	return (
		<motion.div
			whileHover={{
				backgroundColor: hover === "true" && "#7443ff",
				padding:"30px"
			}}
			className={`${width} p-5 bg-zinc-800  flex flex-col justify-between rounded-xl min-h-[60vh]`}
		>
			<div>
				<div className="flex items-center justify-between w-full">
					<h3>{headline}</h3>
					<IoIosArrowRoundForward />
				</div>
				<h1 className="w-full mt-4 text-4xl font-medium">{heading}</h1>
			</div>
			<div className="w-full ">
				{project && (
					<div className="flex-col">
						<h1 className="font-semibold leading-none tracking-tight text-8xl">
							Start a Project
						</h1>
						<button className="px-5 py-2 border-[1px] rounded-full mt-5 border-zinc-50">
							Contact Us
						</button>
					</div>
				)}
				{para && (
					<p className="mt-24 text-sm font-medium text-zinc-500">
						Explore What Drives Our Team
					</p>
				)}
			</div>
		</motion.div>
	);
};

export default Card;

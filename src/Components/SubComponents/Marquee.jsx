import { motion } from "framer-motion";

const Marquee = ({ imagesUrls, direction }) => {
	return (
		<div className="flex w-full overflow-hidden ">
			<motion.div
				initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
				className="flex gap-40 py-10 pr-40 shrink-0 "
			>
				{imagesUrls.map((url, index) => (
					<img
						src={`${url}`}
						key={index}
						alt=""
						className="w-[6vw] shrink-0"
					/>
				))}
			</motion.div>
			<motion.div
				initial={{ x: direction === "left" ? "0" : "-100%" }}
				animate={{ x: direction === "left" ? "-100%" : "0" }}
				transition={{
					ease: "linear",
					duration: 15,
					repeat: Infinity,
				}}
				className="flex gap-40 py-10 pr-40 shrink-0 "
			>
				{imagesUrls.map((url, index) => (
					<img
						src={`${url}`}
						key={index}
						alt=""
						className="w-[6vw] shrink-0"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Marquee;

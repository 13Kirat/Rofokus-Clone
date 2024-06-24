import { useMotionValueEvent, useScroll } from "framer-motion";

import { useState } from "react";

const Work = () => {
	const [images, setImages] = useState([
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
			top: "50%",
			left: "50%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
			top: "46%",
			left: "44%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
			top: "45%",
			left: "56%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
			top: "60%",
			left: "53%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
			top: "43%",
			left: "40%",
			isActive: false,
		},
		{
			url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
			top: "65%",
			left: "55%",
			isActive: false,
		},
	]);

	const { scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Page scroll: ", latest);
		showAndHide(Math.floor(latest * 1000));
	});

	const imagesShow = (arr) => {
		setImages((prev) =>
			prev.map((item, index) =>
				arr.indexOf(index) === -1
					? { ...item, isActive: false }
					: {
							...item,
							isActive: true,
					}
			)
		);
	};

	const showAndHide = (scrollVal) => {
		switch (scrollVal) {
			case 0:
				imagesShow([]);
				break;
			case 6:
				imagesShow([0]);
				break;
			case 12:
				imagesShow([0, 1]);
				break;
			case 18:
				imagesShow([0, 1, 2]);
				break;
			case 24:
				imagesShow([0, 1, 2, 3]);
				break;
			case 30:
				imagesShow([0, 1, 2, 3, 4]);
				break;
			case 36:
				imagesShow([0, 1, 2, 3, 4, 5]);
				break;
		}
	};

	return (
		<div className="relative w-full mt-10">
			<div className="max-w-screen-xl mx-auto text-center ">
				<h1 className="text-[30vw] font-medium select-none tracking-tight leading-none">
					Work
				</h1>
				<div className="absolute top-0 left-0 w-full h-full">
					{images.map(
						(elem, index) =>
							elem.isActive && (
								<img
									key={index}
									style={{
										top: elem.top,
										left: elem.left,
										width: "250px",
										height: "250px",
										zIndex: 999,
									}}
									className="absolute rounded-lg -translate-x-[50%] -translate-y-[50%] w-60 h-60"
									src={elem.url}
									alt=""
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default Work;

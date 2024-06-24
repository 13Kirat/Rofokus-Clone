import Button from "../Button";

const Product = ({ val, mover, index }) => {
	return (
		<div
			onMouseEnter={() => mover(index * 20)}
			className="w-full py-20 h-[20rem]"
		>
			<div className="flex items-center justify-between max-w-screen-xl mx-auto text-white-xl">
				<h1 className="text-6xl font-medium capitalize">{val.title}</h1>
				<div className="w-1/3 dets">
					<p className="mb-10">{val.description}</p>
					<div className="flex items-center gap-5">
						{val.live && <Button title={"Live Website"} />}
						{val.case && <Button title={"Case Study"} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;

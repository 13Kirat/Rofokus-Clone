import Card from "./SubComponents/Card";

const Cards = () => {
	return (
		<div className="w-full">
			<div className="flex max-w-screen-xl gap-2 py-20 mx-auto">
				<Card
					width={"basis-1/3"}
					para={true}
					project={false}
					headline={"Up Next: News"}
					heading={`Insights and behind the scenes`}
				/>
				<Card
					width={"basis-2/3"}
					para={false}
					project={true}
					headline={"Get In Touch"}
					heading={`Let's go to it, together`}
					hover="true"
				/>
			</div>
		</div>
	);
};

export default Cards;

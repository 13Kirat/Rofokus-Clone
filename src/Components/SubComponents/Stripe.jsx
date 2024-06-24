const Stripe = ({ val }) => {
	return (
		<div className="flex items-center justify-between px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 w-[16.66%]">
			<img src={`${val.url}`} alt="" />
			<span className="font-semibold">{val.number}</span>
		</div>
	);
};



export default Stripe;

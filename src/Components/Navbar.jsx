import Button from "./Button";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between max-w-screen-xl py-6 mx-auto border-b-[1px] border-zinc-700">
			<div className="flex items-center nleft">
				<img
					src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
					alt=""
				/>
				<div className="flex ml-20 gap-14 links">
					{["Home", "Work", "Culture", "", "News"].map((e, i) =>
						e.length !== 0 ? (
							<a
								key={i}
								className="flex items-center gap-1 text-sm font-regular"
								href="#"
							>
								{i === 1 && (
									<span
										style={{
											boxShadow: "0 0 0.25em #00ff19",
										}}
										className="inline-block w-1 h-1 bg-green-500 rounded-full"
									></span>
								)}
								{e}
							</a>
						) : (
							<span
								className="w-[2px] h-7 bg-zinc-700"
								key={i}
							></span>
						)
					)}
				</div>
			</div>
            <Button title={"Get Started"} />
		</div>
	);
};

export default Navbar;

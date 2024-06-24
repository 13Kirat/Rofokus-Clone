const Footer = () => {
	return (
		<div className="w-full">
			<div className="flex max-w-screen-xl gap-10 py-10 mx-auto">
				<div className="basis-1/2">
					<h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
						refokus.
					</h1>
				</div>

				<div className="flex gap-10 basis-1/2">
					<div className="">
						<h4 className="mb-10 capitalize text-zinc-500">
							Socials
						</h4>
						{["Instagram", "Twitter (x?)", "LinkedIn"].map(
							(item, index) => (
								<a
									key={index}
									className="block mt-2 capitalize text-zinc-600"
								>
									{item}
								</a>
							)
						)}
					</div>

					<div className="">
						<h4 className="mb-10 capitalize text-zinc-500">
							Socials
						</h4>
						{["Instagram", "Twitter (x?)", "LinkedIn"].map(
							(item, index) => (
								<a
									key={index}
									className="block mt-2 capitalize text-zinc-600"
								>
									{item}
								</a>
							)
						)}
					</div>
                    
					<div className="flex flex-col items-end basis-1/3">
						<p className="text-right">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ipsam sit nostrum dignissimos voluptate rem
						</p>
						<img
							src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
							className="w-32 mt-10"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

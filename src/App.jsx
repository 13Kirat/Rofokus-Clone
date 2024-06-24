import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Marquees from "./Components/Marquees";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";

function App() {
	const scroll = new LocomotiveScroll();

	return (
		<div className="w-full h-full text-white font-['satoshi'] bg-zinc-900">
			<Navbar />
			<Work />
			<Stripes />
			<Products />
			<Marquees />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;

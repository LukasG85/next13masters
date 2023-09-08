import { ProductList } from "../ui/organisms/ProductList";
import { products } from "@/data";

export default function Home() {
	return (
		<section className="mx-auto max-w-2xl py-12 ps-8 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}

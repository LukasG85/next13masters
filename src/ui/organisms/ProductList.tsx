import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListType } from "@/types";

export const ProductList = ({ products }: ProductListType) => {
	return (
		<ul
			className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>
	);
};

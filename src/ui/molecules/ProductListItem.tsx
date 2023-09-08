import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductType } from "@/types";

export const ProductListItem = ({ image, category, name, price, id }: ProductType) => {
	return (
		<li>
			<article key={id} className="aspect-square overflow-hidden rounded-md border bg-white">
				<ProductCoverImage src={image} alt={category} />
				<ProductListItemDescription product={{ category, name, price }} />
			</article>
		</li>
	);
};

import { formatMoney } from "./../../utils";

type ProductListItemDescriptionProps = {
	product: {
		category: string;
		name: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between px-4">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span>Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatMoney(price)}</p>
		</div>
	);
};

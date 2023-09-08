export type ProductType = {
	id: number;
	image: string;
	name: string;
	category: string;
	price: number;
};

export type ProductListType = {
	products: ProductType[];
};

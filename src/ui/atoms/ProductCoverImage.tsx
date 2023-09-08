import React from "react";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="min-h-80 hover h-50 overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={480}
				src={src}
				alt={`Odzież z kategorii - ${alt}`}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};

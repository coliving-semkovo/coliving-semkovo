import React from "react";
import Image from "next/image";

interface WireframeSectionProps {
	title?: string;
	explanation?: string;
	links?: Link | Link[];
	imageUrl?: string;
}

type Link = {
	route: string;
	text: string;
};

const WireframeSection: React.FC<WireframeSectionProps> = ({
	title,
	explanation,
	links,
	imageUrl,
}) => {
	// Convert links to an array if it's not already one
	const normalizedLinks = Array.isArray(links) ? links : links ? [links] : [];

	return (
		<section className="flex flex-col items-center justify-center bg-gray-100 px-4">
			<div className="my-6 flex w-full max-w-4xl flex-col items-center border-4 border-dashed border-gray-300 bg-gray-50 p-10 sm:flex-row">
				{imageUrl && (
					<div className="order-first mb-6 ml-4 flex size-32 min-h-[8rem] min-w-[8rem] items-center justify-center overflow-hidden rounded-full border-8 border-dashed border-gray-300 sm:order-last sm:mb-0 sm:size-64 sm:min-h-[16rem] sm:min-w-[16rem]">
						<Image
							src={imageUrl}
							width="500"
							height="500"
							alt="Example"
							className="aspect-square size-full object-cover grayscale"
						/>
					</div>
				)}
				<div className="grow">
					{title && (
						<h1 className="text-3xl font-bold capitalize text-gray-800">
							{title}
						</h1>
					)}
					{explanation && <p className="mt-4 text-gray-800">{explanation}</p>}
					{normalizedLinks.length > 0 &&
						normalizedLinks.map((link) => (
							<p key={link.route} className="mt-4 text-gray-800">
								<a
									href={link.route}
									className="text-blue-500 hover:text-blue-700"
								>
									{link.text} →
								</a>
							</p>
						))}
				</div>
			</div>
		</section>
	);
};

export default WireframeSection;

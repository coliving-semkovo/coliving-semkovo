"use client";

import Image from "next/image";

import { Icons } from "@/components/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserDropdown = () => {
	// Example static data for demonstration
	const user = {
		image: "https://placebeard.it/500x500", // Placeholder user image path
		name: "Jane Doe",
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Image
					className="overflow-hidden rounded-full"
					src={user.image}
					alt={user.name}
					width={32}
					height={32}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => console.log("Sign out logic here")}>
					<Icons.logOut className="mr-2 size-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

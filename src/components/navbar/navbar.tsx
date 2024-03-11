import Link from "next/link";

import { SignInButton } from "@/components/navbar/sign-in-button";
import { UserDropdown } from "@/components/navbar/user-dropdown";

export const Navbar = () => {
	// Assuming a fixed state for demonstration
	const isAuthenticated = false; // Example authentication state, adjust based on actual logic later

	return (
		<header className="w-full border-b">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="font-mono text-lg font-bold">
					Coliving Semkovo
				</Link>
				<div className="flex items-center gap-2">
					{isAuthenticated ? <UserDropdown /> : <SignInButton />}
				</div>
			</div>
		</header>
	);
};

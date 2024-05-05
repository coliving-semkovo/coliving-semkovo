import Link from "next/link";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
	return (
		<header className="w-full border-b">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="font-mono text-lg font-bold">
					Coliving Semkovo
				</Link>
				<div className="flex items-center gap-2">
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
					<SignedOut>
						<SignInButton mode="modal">
							<Button>Manage Your Stay</Button>
						</SignInButton>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

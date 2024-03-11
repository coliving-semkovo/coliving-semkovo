"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SignInButton = () => {
	return (
		<Link href="/login" passHref>
			<Button>Sign in</Button>
		</Link>
	);
};

import "@/styles/globals.css";
import { DM_Sans as FontSans } from "next/font/google";

import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	robots: { index: true, follow: true },
	icons: {
		icon: "/favicon/favicon.ico",
		shortcut: "/favicon/favicon-16x16.png",
		apple: "/favicon/apple-touch-icon.png",
	},
	verification: {
		google: siteConfig.googleSiteVerificationId,
	},
	openGraph: {
		url: siteConfig.url,
		title: siteConfig.title,
		description: siteConfig.description,
		siteName: siteConfig.title,
		images: "/opengraph-image.png",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: "/opengraph-image.png",
	},
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<ClerkProvider>
					<ThemeProvider attribute="class">
						<Navbar />
						{children}
						<Footer />
						<Toaster />
					</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	);
};

export default RootLayout;

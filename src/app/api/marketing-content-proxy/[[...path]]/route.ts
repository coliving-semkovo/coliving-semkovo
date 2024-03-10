import fetch from "node-fetch";

export async function GET(req: Request) {
	// Use BASE_URL from environment variables or fallback to a default Semkovo domain
	const baseUrl = process.env.WEBFLOW_BASE_URL || "https://colivingsemkovo.com";
	//TODO: #7 Remove fallback once we got env variables in Codespaces working

	// Extract the dynamic path from the request URL
	const url = new URL(req.url);
	// Adjust the slice index to remove the static parts in front (/api/marketing-content-proxy)
	const path = url.pathname.split("/").slice(3).join("/");

	// Construct the full URL to fetch
	const targetUrl = `${baseUrl}/${path}`;
	console.log(targetUrl);

	try {
		const response = await fetch(targetUrl, {
			method: "GET",
			headers: {
				"Content-Type": "text/html",
			},
		});

		const data = await response.text(); // Get response as text

		// Construct a new response with fetched data and appropriate headers
		return new Response(data, {
			status: 200,
			headers: {
				"Content-Type": "text/html",
			},
		});
	} catch (error) {
		console.error("Proxy fetch error:", error);
		return new Response(
			JSON.stringify({ error: "Error fetching proxied content" }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
}

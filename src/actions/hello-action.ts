"use server";

export const helloAction = async (name: string) => {
	return { message: `Welcome to Coliving Semkovo, ${name}!` };
};

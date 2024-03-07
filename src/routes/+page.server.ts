import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		console.log(email);
		return {
			success: true
		};
	}
} satisfies Actions;

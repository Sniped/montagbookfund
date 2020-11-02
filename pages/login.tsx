import { NextRouter, useRouter, withRouter } from 'next/router';
import { useEffect } from 'react';
import { Endpoints } from '../util/endpoints';

export default function LoginPage() {
	const router = useRouter();
	useEffect(() => {
		if (!window.localStorage.getItem('token')) {
			let once;
			window.open(`${Endpoints.AUTH_URI}`, '_blank', 'width=500,height=1000');
			window.addEventListener('message', e => {
				if (once || e.origin !== Endpoints.API_BASE) return;
				once = true;
				const token = e.data;
				window.localStorage.setItem('token', token);
				router.push('/');
			});
		} else router.push('/');
	});

	return (
		<div>Waiting for authorization...</div>
	)
}
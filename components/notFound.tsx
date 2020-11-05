export default function NotFound() {
	return (
		<div className="mx-auto max-w-screen-xl text-center p-10">
			<p className="text-4xl font-bold">Uh oh!</p>
			<div className="flex justify-center my-5">
				<img
					className="rounded-lg w-1/2"
					src="https://img.apmcdn.org/1e2f2ceaf741c8f18bd6b2dca13c352dff595eca/uncropped/3c35f2-20190402-fire-house05.gif"
				/>
			</div>
			<p className="text-2xl font-semibold">
				It seems like you've made Beatty mad. Don't worry, you can always
				navigate back to the home screen to try again!
			</p>
		</div>
	);
}

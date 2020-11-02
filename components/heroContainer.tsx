import PostCard from './postCard';

export default function HeroContainer() {
	return (
		<div className="flex max-w-screen-xl mx-32">
			<div className="rounded-lg my-5 p-10 text-left tracking-tight">
				<h2 className="font-bold text-5xl text-black">Montag Book Blog</h2>
				<p className="font-semibold text-3xl w-2/3 text-green-700">Watch as the salamander who risked it all embarks on a journey of knowledge.</p>
			</div>
			<div className="justify-end">
				<PostCard title="Hello World" authorName="Guy Montag" content="Life is depressing." />
			</div>
		</div>
	);
}

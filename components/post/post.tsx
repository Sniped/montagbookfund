import { BlogPost } from '../../util/typings';

export default function Post({ post, children }: { post: BlogPost, children: any }) {
	return (
		<div className="mx-auto max-w-screen-xl">
			<div className="text-center border-b border-gray-400 p-10">
				<p className="text-4xl font-bold mb-5">{post.title}</p>
				<div className="flex items-center justify-center">
					<img
						src={post.author.authorAvatar}
						className="w-10 h-10 rounded-full mr-4"
					/>
					<p className="text-md">{post.author.authorName}</p>
				</div>
			</div>
			<div className="text-lg p-5">
				{children}
			</div>
		</div>
	);
}

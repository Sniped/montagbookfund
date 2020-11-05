import { truncate } from 'lodash';
import Link from 'next/link';
import { BlogPost } from '../../util/typings';

export default function PostCard({ post }: { post: BlogPost }) {
	return (
		<div className="w-full max-w-md">
			<div className="rounded-lg bg-gray-200 shadow-lg ml-5 p-5 text-left  flex flex-wrap flex-col">
				<Link href={`/post/${post.postId}`}>
					<a>
						<p className="text-lg font-semibold mb-2">{post.title}</p>
						<p className="text-base mb-8">{post.previewText ? truncate(post.previewText) : truncate(post.content)}</p>
						<div className="flex items-center">
							<img
								src={post.author.authorAvatar}
								className="w-10 h-10 rounded-full mr-4"
							/>
							<p className="text-sm leading-none">{post.author.authorName}</p>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
}

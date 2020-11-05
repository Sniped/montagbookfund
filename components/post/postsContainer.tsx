import { BlogPost } from '../../util/typings';
import PostCard from './postCard';

export default function PostsContainer({ posts }: { posts: BlogPost[] }) {
	return (
		<div className="mx-auto max-w-screen-xl text-center">
			<p className="font-bold text-4xl pt-10">Check out Montag's latest</p>
			<p className="font-semibold text-2xl text-green-700">
				Montag's latest adventures, all in one place
			</p>
			<div className="flex justify-between flex-row p-10">
				{posts.map(post => (
					<PostCard key={post.postId} post={post} />
				))}
			</div>
		</div>
	);
}

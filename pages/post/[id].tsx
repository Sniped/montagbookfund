import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import { BounceLoader } from 'react-spinners';
import useSWR from 'swr';
import Navbar from '../../components/navbar';
import NotFound from '../../components/notFound';
import Post from '../../components/post/post';
import { posts } from '../../util/constants';

const fetcher = async (id: string) => {
	const res = await fetch(`/articles/${id}.md`);
	return res.text();
};

export default function ViewPost() {
	const router = useRouter();
	const { id } = router.query;

	const post = posts.find(p => p.postId === id);

	const { data, error }: { data?: string; error?: any } = useSWR(id, fetcher);

	return (
		<div>
			<div>
				<Navbar />
				{!data && (
					<div className="flex justify-center">
						<BounceLoader />
					</div>
				)}
				{error || (!post && <NotFound />)}
				{post && data && (
					<Post post={post}>
						<Markdown
							options={{
								forceBlock: true,
								overrides: {
									h3: {
										props: {
											className: 'font-bold text-3xl text-green-700',
										},
									},
									p: {
										props: {
											className: 'text-base p-3',
										},
									},
									strong: {
										props: {
											className: 'text-green-700',
										},
									},
								},
							}}
						>
							{data}
						</Markdown>
					</Post>
				)}
			</div>
		</div>
	);
}

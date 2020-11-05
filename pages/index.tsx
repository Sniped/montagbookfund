import HeroContainer from '../components/home/heroContainer';
import Navbar from '../components/navbar';
import PostsContainer from '../components/post/postsContainer';
import { posts } from '../util/constants';

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroContainer />
			<PostsContainer posts={posts} />
		</div>
	);
}

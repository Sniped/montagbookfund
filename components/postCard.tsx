import { truncate } from 'lodash';

export default function PostCard({ title, authorName, content } : { title: string, authorName: string, content: string }) {
	return (
		<div className="rounded-lg bg-gray-300 shadow-lg p-20 text-center">
			<h2 className="text-lg font-semibold">{title}</h2>
			<p>{authorName}</p>
			<p className="">{truncate(content)}</p>
		</div>
	)
}
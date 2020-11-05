import { BlogPost } from './typings';

export const posts: BlogPost[] = [
	{
		postId: 'societyProblems',
		featured: false,
		title: 'The Problems With Society',
		author: {
			authorId: 'guyMontag',
			authorName: 'Guy Montag',
			authorAvatar:
				'https://cdn.mos.cms.futurecdn.net/rTiEVv6XuRthc3QYQcznLo-1200-80.jpg',
		},
		previewText:
			'During my time as a salamander, I was in close association with a comrade of mine by the name of Faber.',
		contentType: 'markdown',
	},
	{
		postId: 'socialInteractions',
		featured: false,
		title: 'The People That Have Changed Me',
		author: {
			authorId: 'guyMontag',
			authorName: 'Guy Montag',
			authorAvatar:
				'https://cdn.mos.cms.futurecdn.net/rTiEVv6XuRthc3QYQcznLo-1200-80.jpg',
		},
		previewText:
			"Before I ever became aware of what was going on in society, I can't help but think that I was the same as everyone else deceived by the government.",
		contentType: 'markdown',
	},
	{
		postId: 'salamanderExperience',
		featured: false,
		title: 'My Experience as a Salamander',
		author: {
			authorId: 'guyMontag',
			authorName: 'Guy Montag',
			authorAvatar:
				'https://cdn.mos.cms.futurecdn.net/rTiEVv6XuRthc3QYQcznLo-1200-80.jpg',
		},
		previewText:
			'As you may or may not have known, I was a salamander for ten years.',
		contentType: 'markdown',
	},
];

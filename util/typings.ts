export interface User {
	discordId: string;
	accessToken: string;
	refreshToken: string;
	privileged: string;
}

export interface BlogPost {
	postId: string;
	title: string;
	featured: boolean;
	content?: string;
	previewText?: string;
	contentType: 'markdown' | 'text';
	author: Author;
}

export interface Author {
	authorId: string;
	authorName: string;
	authorAvatar: string;
}

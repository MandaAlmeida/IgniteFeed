// author: { avatar_url: "", name: "". role: "" }
// publishedAt: Date
// content: string

interface ContentProps{
  type: string;
        content: string
}

export interface PostProps {
    id: string
    author: {
      avatarUrl: string;
      name: string;
      role: string;
    };
    publishedAt: Date;
    content: ContentProps[];
  }

  
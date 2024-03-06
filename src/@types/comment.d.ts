
  export interface CommentProps {
      id: string
      author: {
        avatarUrl: string;
        name: string;
        role: string;
      };
      publishedAt: Date;
      content: string;
    }
  
    
 interface Blog {
  title: string;
  body: string;
}


export interface BlogProps extends Blog {
  imageUrl?: string;
  fullScreen: boolean;
}

export interface BlogApiResponse extends Blog {
  userId: number;
  id: number;
}

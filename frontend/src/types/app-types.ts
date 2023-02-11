export interface IPost {
  id: number;
  name: string;
  description: string;
}

export interface IState {
  posts: Array<IPost>;
}

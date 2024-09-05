
export interface IOptions {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
}

export interface IQuestions {
  question: string;
  options: IOptions[]
}

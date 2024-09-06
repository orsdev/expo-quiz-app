
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

export interface IOpenEnded {
  id: string;
  type: string;
  text: string;
  answer: string;
}

export interface IUser {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface JwtResponseI {
  dataUser: {
    id: number;
    name: string;
    lastname: string;
    username: string;
    email: string;
    accessToken: string;
    expiresIn: string;
  };
}

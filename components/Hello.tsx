interface IProps {
  user: {
    name?: string;
    age: number;
  };
}

export default function Hello({ user }: IProps) {
  return user.name ? <h1>Hello! {user.name}</h1> : <button>Login</button>;
}

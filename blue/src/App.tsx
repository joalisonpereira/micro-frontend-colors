export interface AppProps {
  name: string;
}

function App({ name }: AppProps) {
  return <div>{name}</div>;
}

export default App;

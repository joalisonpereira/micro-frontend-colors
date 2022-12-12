import "./App.css";
//@ts-ignore
import { randomRgb } from "@colors/utils";

export interface AppProps {
  name: string;
}

function App({ name }: AppProps) {
  const backgroundColor = randomRgb(
    () => 0,
    () => 0
  );

  return (
    <div className="container" style={{ backgroundColor }}>
      {name}
    </div>
  );
}

export default App;

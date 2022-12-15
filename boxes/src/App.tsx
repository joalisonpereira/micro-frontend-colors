import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

export interface AppProps {
  name: string;
}

function App({ name }: AppProps) {
  const [mousePointers, setMousePointers] = useState([0, 0]);

  const debouncedPointers = useDebounce(mousePointers, 100);

  const boxes = ["red", "gold", "blue", "black", "purple"];

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      setMousePointers([e.clientX, e.clientY]);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5em",
          color: "#444",
        }}
      >
        <div>{name}</div>
      </div>
      {boxes.map((item, index) => (
        <div
          className="box"
          key={item}
          style={{
            width: 20 * (index + 1),
            height: 20 * (index + 1),
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: item,
            position: "absolute",
            top: debouncedPointers[1],
            left: debouncedPointers[0],
            transition: `all ${(index + 2) / 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default App;

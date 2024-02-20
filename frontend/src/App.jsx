import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      <color attach="background" args={["#15151a"]} />
      <Experience />
    </Canvas>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      <color attach="background" args={["#15151a"]} />
      <Experience />
    </Canvas>
  );
}

export default App;

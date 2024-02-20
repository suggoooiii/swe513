import { Canvas } from "@react-three/fiber";
import { TextField } from "r3dy";
import Experience from "./components/Experience";
import "./App.css";
import { Center } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov: 42 }}>
      {/* <color attach="background" args={["#15151a"]} /> */}
      <Center top>
        <TextField backgroundColor="transparent" position={[10, 2, -10]} />
      </Center>

      <Experience />
    </Canvas>
  );
}

export default App;

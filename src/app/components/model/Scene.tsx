'use client';
import { Canvas } from "@react-three/fiber"
import {Model} from "./Plant"
import {OrbitControls} from "@react-three/drei";

export default function index() {
    return (
        <div>
            <div style={{ width: "50vw", height: "80vh"}} className="flex flex-col justify-center items-center">
                <Canvas >
                    <OrbitControls enableZoom={false} enablePan={false}  ></OrbitControls>
                    <ambientLight intensity={8} />
                    <directionalLight position={[-2, 1, 1]} intensity={3} />
                    <Model />
                </Canvas>
            </div>
        </div>
    )
}
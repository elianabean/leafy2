'use client';
import { Canvas } from "@react-three/fiber"
import {Model} from "./Plant"
import {OrbitControls} from "@react-three/drei";

export default function index() {
    return (
        <div>
            <div className="w-[100vw] h-[20vh] md:w-[50vw] md:h-[60vh] lg:h-[80vh] flex flex-col justify-center items-center ">
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
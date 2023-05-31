import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
// import Aircraft from './Aircraft'
import Scene from "./Scene.tsx"
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'



const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
position: relative;

`
function Controls() {
    const {
        camera,
        gl: { domElement },
    } = useThree();
    return <OrbitControls args={[camera, domElement]} enableZoom={false} enableDamping={true} autoRotate />;
}

function ThreeScene() {



    return (
        <Canvas camera={{ position: [0, 5, 8] }} className="aircraft-scene">
            <Environment files="./kloppenheim_06_puresky_1k.hdr" background blur={0} preset={'forest'} />
            {/* <ambientLight />
      <pointLight position={[0, 5, 0]} intensity={2} />
      <directionalLight position={[0, 5, 0]} intensity={3} /> */}
            <Controls />
            <Scene />
            <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={50} far={50} />
            <EffectComposer multisampling={8}>
                <Bloom kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
                <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
            </EffectComposer>
        </Canvas>
    )
}


function Showcase() {
    return (
        <Section>
            <ThreeScene />
            <div className="container showcase-wrapper">
                <h1>Drag your mouse around and observe the Aircraft</h1>
            </div>
        </Section>
    )
}

export default Showcase;
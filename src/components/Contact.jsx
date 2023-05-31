import React from 'react'
import styled from 'styled-components'
// import { OrbitControls, useCubeTexture } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'
// import { KernelSize } from 'postprocessing'
// import MaferCity from './MaferCity'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
<div className=""></div>


const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
position: relative;

`
// function Controls() {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   return <OrbitControls args={[camera, domElement]} enableZoom={true} enableDamping={true} />;
// }

// function ThreeScene() {
//   const texture = useCubeTexture(
//     ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png",], { path: "Standard-Cube-Map/" }
//   )


// return (
//   <Canvas camera={{ position: [0, 0, 50] }} className='aircraft-scene' >
//     {/* <Environment files="/kloppenheim_06_puresky_1k.hdr" background blur={0} preset={'forest'} /> */}
//     <ambientLight />
//     <pointLight position={[5, 5, 5]} intensity={1} />
//     <pointLight position={[-3, -3, 2]} />
//     <Controls />
//     <MaferCity />
//     {/* <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={50} far={50} /> */}
//     <EffectComposer multisampling={4}>
//       {/* <Bloom kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} /> */}
//       {/* <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} /> */}
//     </EffectComposer>
//   </Canvas>
// )
// }

const Contact = () => {
  return (
    <Section>
      <div className="container">
        <div className="contact-otr">
          <div className="contact-canvas">
            {/* <ThreeScene /> */}
          </div>
          <div className="contact-form"></div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
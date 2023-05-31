import React, { Suspense, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import "./main.css"
import { CameraShake, OrbitControls } from '@react-three/drei'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
position: relative;
display: flex;
align-items: center;

`
function Triangle({ color, ...props }) {
  const ref = useRef()
  const [r] = useState(() => Math.random() * 10000)
  useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
  const { paths: [path] } = useLoader(SVGLoader, './triangle.svg') // prettier-ignore
  const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}


function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
  })
  return <group ref={ref}>{children}</group>
}
const Who = () => {
  return (
    <Section>
      <div className="who-bg">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls enableDamping={true} enableZoom={false} />
          <ambientLight />

          <Suspense fallback={null}>
            <Rig>
              <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
              <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
              <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
              <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />


              <EffectComposer multisampling={8}>
                <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
                <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
              </EffectComposer>
            </Rig>
          </Suspense>
          <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />

        </Canvas>
      </div>
      <div className='container'>
        <div className="who-main-wrapper">
          <div className="profile-img">
            <img src="./img/pfp.jpg" alt="profile" />
          </div>
          <div className="profile-name">
            Hi, I'm Abhishek <span><img src="./img/hand-emote.png" alt="hi" /></span>
          </div>
          <div className="profile-main-text">
            <h1>Building digital
              products, brands, and
              experience.</h1>
          </div>
          <div className="shot-btn">
            <a href="#">Latest Shots</a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Who
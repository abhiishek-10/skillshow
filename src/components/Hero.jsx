import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import "./main.css"

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align:center;
width: 1400px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap:20px;
height: 100%;
`
const Title = styled.h1`
font-size:74px;
`
const Right = styled.div`
flex: 3;
height: 100%;
`

const Hero = () => {
  return (
    <div className='container hero-main'>
      <Navbar />
      <div className="hero-inr">
        <Left>
          <Title>
            <span className='hero-texts title-one'>
              <span className='first-title'>
                <span>Think,</span>
                <span>Make,</span>
                <span>Solve,</span>
              </span>
              <span className='first-title'>
                <span>Think,</span>
                <span>Make,</span>
                <span>Solve,</span>
              </span>
            </span>
            <span className='hero-texts title-tow'>
              <span className="first-title">
                <span>Think,</span>
                <span>Make,</span>
                <span>Solve,</span>
              </span>
              <span className="first-title">
                <span>Think,</span>
                <span>Make,</span>
                <span>Solve,</span>
              </span>
            </span>
            <span className='hero-texts title-three'>
              <span className="first-title">
                <span>Think.</span>
                <span>Make.</span>
                <span>Solve.</span>
              </span>
              <span className="first-title">
                <span>Think.</span>
                <span>Make.</span>
                <span>Solve.</span>
              </span>
            </span>

          </Title>

        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableDamping={true} enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
              <Sphere args={[1, 100, 200]} scale={2} >
                <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2} />
              </Sphere>
            </Float>
          </Canvas>
        </Right>
      </div>
    </div>
  )
}

export default Hero
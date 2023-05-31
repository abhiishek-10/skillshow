import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Showcase from "./components/Showcase"
import Contact from "./components/Contact"
import Loader from "./components/Loader"


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  display: none;
}
color: white;
background: url("./img/bg.jpeg");
`

function App() {

  return (
    <>
      {/* <Loader /> */}
      <Container>
        <Hero />
        <Who />
        <Works />
        <Showcase />
        <Contact />
      </Container>
    </>
  )
}

export default App

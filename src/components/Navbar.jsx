import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

const Links = styled.div`
display: flex;
align-items: center;
gap:50px;
`
const Logo = styled.img`
height:70px
`

const List = styled.ul`
display: flex;
gap:20px;
list-style: none;
`
const ListItem = styled.li` 
cursor: pointer;
`

const Icons = styled.div` 
display: flex;
align-items: center;
gap:20px;
`
const Icon = styled.img` 
width: 20px;
cursor: pointer;
`
const Button = styled.button`
width: 100px;
padding: 10px;
background-color:#da4ea2;
color: #fff;
border: none;
border-radius:8px;
cursor: pointer;

`
const Navbar = () => {
  return (
    <Section>

      <div className="nav-main">
        <Links>
          <a href="#">
            <Logo src="./img/logo.png" />
          </a>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </div>

    </Section>
  )
}

export default Navbar
import React, { useState } from 'react'
import styled from 'styled-components'
// import { selectCars } from '../features/car/carSlice'
// import { useSelector } from 'react-redux' 

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  // const cars = useSelector(selectCars)
  // console.log(cars)

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <i onClick={()=>{setBurgerStatus(true)}} className='fa fa-bars'></i>
      </RightMenu>

      <Burgernav show={burgerStatus}>
        <Close>
          <i onClick={()=>{setBurgerStatus(false)}} className='fa fa-close'></i>
        </Close>
        <li><a href="/">Model S</a></li>
        <li><a href="/">Model 3</a></li>
        <li><a href="/">Model X</a></li>
        <li><a href="/">Model Y</a></li>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-in</a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadster</a></li>
        <li><a href="/">Semi</a></li>
        <li><a href="/">Charging</a></li>
        <li><a href="/">Power</a></li>
        <li><a href="/">Commercial energy</a></li>
        <li><a href="/">Utlities</a></li>
        <li><a href="/">Test Drive</a></li>
      </Burgernav>

    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right:0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex: 1;

    a{
      font-weight: 600;
      padding: 0 10px;
      text-transform: uppercase;
      flex-wrap: nowrap;
      color: black;
    }

    @media (max-width: 768px){
      display: none;
  }
`

const RightMenu = styled.div`
      display: flex;
      align-items: center;

      a{
        font-weight: 600;
        text-transform: uppercase;
        color: black;
        margin-right: 10px;
      }
      
      i{
        display: none;
        cursor: pointer;
        font-size: 20px;
        @media (max-width: 768px){
          display: inline-block;
      }
      }
`

const Burgernav = styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: white;
      width: 300px;
      z-index: 10;
      height: 100vh;
      list-style: none;
      padding: 20px;

      li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
          font-weight: 600;
        }
      }

      transform: ${props => props.show ? "translateX(0)": "translateX(100%)"};
      transition: transform .3s ease-in-out;
`

const Close = styled.div`
    cursor: pointer;
    font-size: 25px;
    display: flex;
    justify-content: flex-end ;
`
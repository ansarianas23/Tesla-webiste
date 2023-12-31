import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

const Section = ({ title, description, backgroundImg, leftBtnText, RightBtnText }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Itemtext>
            </Fade>

            <Fade bottom>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {RightBtnText && <RightButton>
                            {RightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                    <DownArrow src={"/images/down-arrow.svg"} />
                </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    z-index: 10;
    
`

const Itemtext = styled.div`
    padding-top: 15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`
import styled from 'styled-components'
import { Container } from '@mui/material'

export const SeamlessWrapper = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
`
export const WrapContent = styled(Container)`
  margin-top: 100px;
`
export const Wrap = styled.div`
  width: 625px;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 280px;
  }
`

export const Title = styled.h1`
  font-size:45px;
  font-weight: 800;
  line-height: 68px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
font-size: 28px;
font-weight: 800;
line-height: 40px;
letter-spacing: 0em;


  }
  }
`
export const Paragraph = styled.h5`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
  }
`

export const Text = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  margin-top: 30px;

  font-family: ${(props) => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

export const AllDevice = styled.img`
  margin-right: 50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 0px;
    padding-right: 10px;
  }
`

export const ShowImg = styled.img`
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 500px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 400px;
  }
  @media screen and (max-width: 899px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const Arrow = styled.img`
  padding-left: 20px;
  height: 10px;
`

export const GetInTouch = styled.button`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 272px;
  height: 48px;
  border-radius: 4px;
  background: #5f6fbf;
  border: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 70px;
  }
`
export const BtnText = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
  }
`

export const Div = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    justify-content: center;
  }
`
export const Div3 = styled(Container)`
  text-align: start;
`

export const Div1 = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 899px) {
    margin-left: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`
export const Div2 = styled.div`
  @media ${(props) => props.theme.breakpoints.xl} {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media screen and (max-width: 899px) {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

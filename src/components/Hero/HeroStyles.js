import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled.div`
  background: #231741;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 100%;
  }
`
export const WrapContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }
`

export const HeroWrapper = styled(Container)`
  text-align: start;
  margin-top: 100px;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 10px;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 10px;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.light};
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    font-size: 25px;
    font-weight: 800;
    line-height: 30px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: 0em;
  }
`

export const TextBig = styled.h3`
  color: #ffa339;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`

export const TextSmall = styled.h3`
  color: #ffa339;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`
export const Paragraph = styled.h5`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.light};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
  }
`

export const SubmitEmail = styled.button`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 300px;
  height: 52px;
  border-radius: 4px;
  background: #ff3d6b;
  border: none;
  margin-top: 70px;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 200px;
  }
`

export const BtnText = styled.h3`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 380px;
  }
  @media screen and (max-width: 899px) {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 340px;
    margin-bottom: 100px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 100px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 250px;
    margin-bottom: 50px;
  }
`

export const Arrow = styled.img`
  padding-left: 20px;
  height: 10px;
`

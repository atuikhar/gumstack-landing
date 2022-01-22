import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
  }
`
export const SeamlessWrapper = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
`

export const Title = styled.h1`
  font-size:45px;
  font-weight: 800;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
  }
`
export const Paragraph = styled.h5`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  width: 656px;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
  }
`

export const Text = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: start;

  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
  margin: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0px;
  }
`

export const AllDevice = styled.img`
  margin-right: 30px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 20px;
  }
`

export const ShowImg = styled.img`
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
  margin-top: 100px;
  margin-left: 20px;
  width: 272px;
  height: 48px;
  border-radius: 4px;
  background: #5f6fbf;
  border: none;

  &:hover {
  }
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
`

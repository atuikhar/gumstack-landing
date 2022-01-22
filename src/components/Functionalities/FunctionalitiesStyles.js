import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
  }
`
export const Wrapper1 = styled(Container)`
  margin-top: 100px;
`
export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 50px;
  grid-column-gap: 50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
`

export const Text = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`
export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }
`
export const Paragraph = styled.h5`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  font-family: ${(props) => props.theme.fonts.main};
`

export const Image = styled.img`
  object: cover;
  height: 50px;
  width: 50px;
  cursor: pointer;
`
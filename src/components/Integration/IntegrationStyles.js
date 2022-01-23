import styled from 'styled-components'
import { Container, ListItem } from '@mui/material'

export const Wrap = styled(Container)``
export const Wrap1 = styled(Container)`
  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
  }
`

export const IntegrationWrapper = styled.div`
  margin-top: 100px;
  padding-top: 100px;
  margin-bottom: 100px;
  background: linear-gradient(0deg, #fff9fa, #fff9fa), #0d012c;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.lg} {
    text-align: center;
    @media ${(props) => props.theme.breakpoints.sm} {
    }
  }
`

export const Text = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  margin-top: 20px;

  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

export const ShowImg = styled.img`
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 500px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 400px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 250px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 150px;
  }
`

export const Arrow = styled.img`
  padding-left: 10px;
  height: 10px;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding-left: 5px;
  }
`

export const BtnText = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  padding-top: 10px;
  padding-left: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    font-weight: 500;
    line-height: 27px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 8px;
    font-weight: 500;
    line-height: 15px;
  }
`

export const Div = styled.div`
  text-align: start;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0px;
  }
`

export const Div1 = styled.div`
  text-align: start;
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    margin-top: 50px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: -100px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 50px;
    text-align: center;
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
    margin: 0;
  }
`
export const ListItemContainer = styled(ListItem)`
  margin-top: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    padding: 1px;
  }
`
export const CheckIcon = styled.img``

export const TalkToDeveloper = styled.button`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 272px;
  height: 48px;
  border-radius: 4px;
  background: #5f6fbf;
  border: none;
  margin-bottom: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 70px;
    margin-left: 0px;
    width: 200px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    margin-top: 70px;
    margin-left: 0px;
    width: 100px;
  }
`

export const P = styled.span`
  color: #fff;
  position: relative;
  top: 25px;
`

import styled from 'styled-components'
import { Container, ListItem, Avatar, Grid } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-top: 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1px;
  }
`
export const Wrapper1 = styled(Container)``
export const Wrapper2 = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    text-align: center;
  }
`

export const GridWrapper = styled(Grid)`
  margin-top: 142px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
  }
`

export const WrapperContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1px;
  }
`

export const Text = styled.h1`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`
export const Title = styled.h1`
  font-weight: 800;
  line-height: 44px;
  letter-spacing: 0em;
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`
export const Paragraph = styled.h5`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  margin-top: 100px;

  font-family: ${(props) => props.theme.fonts.main};
`

export const ShowImg = styled.img`
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
  }
`

export const CheckIcon = styled.img``

export const ListItemContainer = styled(ListItem)`
  margin-top: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    margin-left: 1px;
    padding: 1px;
  }
`

export const AvatarContainer = styled(Avatar)`
  background-color: #000;
  color: #fff;
`

export const GridContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
  }
`

export const Arrow = styled.img`
  padding-left: 20px;
  height: 10px;
`

export const GetStarted = styled.button`
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
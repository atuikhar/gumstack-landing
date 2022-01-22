import styled from 'styled-components'

import { Container, ListItem } from '@mui/material'

export const Wrapper = styled.div`
  margin-top: 100px;
  padding-top: 100px;
  background: linear-gradient(0deg, #fff9fa, #fff9fa), #0d012c;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
  }
`

export const WrapperDiv1 = styled(Container)`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0px;
  }
`

export const Text = styled.h1`
  font-size: 15px;
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
export const CheckIcon = styled.img``

export const ListItemContainer = styled(ListItem)`
  margin-top: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    padding: 1px;
  }
`

export const IntegrationTechImage = styled.img`
  cursor: pointer;
  border-radius: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 345px;
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

export const Arrow = styled.img`
  padding-left: 20px;
  height: 10px;
`

export const TalkToDeveloper = styled.button`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 272px;
  height: 48px;
  border-radius: 4px;
  background: #5f6fbf;
  border: none;
  margin-left: 50px;
  margin-bottom: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 70px;
    margin-left: 0px;
    width: 200px;
  }
`
export const BtnText = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`

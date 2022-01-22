import styled from 'styled-components'
import { Container } from '@mui/material'

export const Hr = styled.hr`
  border-top: 1px solid #e0e0e0;
  margin-top: 200px;
  margin-bottom: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
    margin-bottom: 150px;
  }
`

export const Wrapper = styled(Container)``
export const Wrap = styled.div``

export const Text = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  font-family: ${(props) => props.theme.fonts.main};
`
export const Img = styled.img`
  height: 40px
  width: 40px;
  margin-left:5px;
`
export const ImgC = styled.img`
  height: 40px
  width: 40px;
`

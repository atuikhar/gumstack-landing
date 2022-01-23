import styled from 'styled-components'

import { Container } from '@mui/material'

export const Div = styled.div`
  background-image: url('/Rectangle.png');
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 336px;
  width: 100%;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    background-image: url('/Rectangle2.png');
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 336px;
    width: 100%;
  }
`
export const Wrapper = styled(Container)``

export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  padding-top: 100px;

  font-family: ${(props) => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 30px;
    margin-top: 20px;
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
  }
`

export const StartTrailButton = styled.button`
  height: 52px;
  width: 224px;
  border-radius: 4px;
  padding: 14px, 36px, 14px, 36px;
  background: #ff3d6b;
  color: #fff;
  cursor: pointer;
  border: none;

  &:hover {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 200px;
    height: 50px;
  }
`
export const Text = styled.h3`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    font-weight: 500;
    line-height: 27px;
  }
`
export const Arrow = styled.img`
  padding-left: 20px;
  height: 10px;
`

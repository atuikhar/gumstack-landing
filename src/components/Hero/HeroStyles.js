import styled from 'styled-components'
import { Container } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const Wrapper = styled.div`
  background: #231741;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 100%;
  }
`

export const HeroWrapper = styled(Container)`
  text-align: start;
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
    text-align: center;
  }
`

export const Title = styled.h1`
  margin-left: 100px;
  font-size: 50px;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.light};
  font-style: normal;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`

export const Text = styled.h3`
  margin-left: 100px;
  color: #ffa339;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`

export const Paragraph = styled.h5`
  margin-left: 100px;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.light};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    margin-top: 20px;
  }
`

export const SubmitEmail = styled.button`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin: 100px;
  width: 300px;
  height: 52px;
  border-radius: 4px;
  background: #ff3d6b;
  border: none;

  &:hover {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px;
    margin-top: 60px;
    margin-bottom: 60px;
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

export const Circle = styled.div`
  cursor: pointer;
  width: 450px;
  height: 450px;
  margin-top: 100px;
  margin-left: 100px;
  border-radius: 50%;
  border: 6px dashed rgba(255, 163, 57, 0.8);
  background-image: url('/imagefull.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 10px;
    margin-top: 10px;
    width: 350px;
    height: 350px;
  }
`
export const Image1 = styled.img`
  padding: 7px;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 340px;
    padding: 0;
  }
`

export const Image2 = styled.img`
  margin-bottom: 170px;
  margin-left: -50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 130px;
  }
`

export const ArrowIcon = styled(ArrowForwardIcon)`
  padding-left: 10px;
`

import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrap = styled(Container)`
  margin-top: 100px;
`
export const Wrap2 = styled.div`
  display: block;
  text-align: end;
  margin-top: 20px;
`

export const Wrapper = styled.div`
  margin-right: 50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 90%;
  }
`
export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
`
export const Text = styled.h1`
  ffont-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;

  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const Paragraph = styled.h3`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  font-family: ${(props) => props.theme.fonts.main};
  margin-top: 20px;
  cursor: pointer;
`

export const PlayStoreButton = styled.button`
  background-image: url('/Playstore.png');
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 156px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const AppleStoreButton = styled.button`
  background-image: url('/AppleStore.png');
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 156px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(0deg, #fff9fa, #fff9fa), #231741;
  mix-blend-mode: normal;
  text-align: center;
  display: flex;
  justify-content: center;
`
export const WrapperContainer = styled.div`
  width: 800px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`
export const WrapperContainer2 = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    margin: 20px;
  }
`

export const Text = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;

  font-family: ${(props) => props.theme.fonts.main};
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;

  font-family: ${(props) => props.theme.fonts.title};
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const Paragraph = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  font-family: ${(props) => props.theme.fonts.main};
`

export const ImageWrapper = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 40%;
  margin-top: 20px;
`

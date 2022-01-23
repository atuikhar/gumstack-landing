import styled from 'styled-components'
import { MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Wrapper = styled.div`
  background: #231741;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const LogoTitle = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 10px;
  }
`
export const Logo = styled.img`
  cursor: pointer;
`

export const Title = styled.h3`
  margin-left: 5px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
export const Text = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.light};
  font-size: 17px;
  margin-right: 100px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
  }
`

export const TextNav = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
  }
`
export const RightNav = styled.div`
  display: flex;
  margin-right: 100px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    margin-right: 10px;
  }
`

export const MobileNavContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-right: 50px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-right: 100px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 50px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 10px;
  }
`

export const NavItem = styled(MenuItem)`
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const Arrow = styled.img`
  height: 5px;
  margin: 5px;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

export const MobileNav = styled(MenuIcon)`
  color: #fff;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    display: none;
  }
`

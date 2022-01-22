import React from 'react'
import { Menu, Fade } from '@mui/material'
import {
  Wrapper,
  LogoTitle,
  Title,
  Text,
  Logo,
  RightNav,
  MobileNav,
  MobileNavContainer,
  NavItem,
  TextNav,
  Arrow,
} from './HeaderStyles'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const openMobileNav = Boolean(mobileAnchorEl)
  const mobileHandleClick = (event) => {
    setMobileAnchorEl(event.currentTarget)
  }
  const mobileHandleClose = () => {
    setMobileAnchorEl(null)
  }
  return (
    <Wrapper>
      <LogoTitle>
        <Logo src="/Logo.png" />
        <Title>Gumstack</Title>
      </LogoTitle>

      <RightNav>
        <Text
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Use Cases
          <Arrow src="/ArrowDown.png" />
        </Text>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{ mt: 1 }}
        >
          <NavItem onClick={handleClose}>
            <TextNav>Retail</TextNav>
          </NavItem>
          <NavItem onClick={handleClose}>
            <TextNav>E-Commerce</TextNav>
          </NavItem>
          <NavItem onClick={handleClose}>
            <TextNav>Sass</TextNav>
          </NavItem>
        </Menu>
        <Text>How It Works</Text>
        <Text>Pricing</Text>
        <Text>SignIn</Text>
      </RightNav>
      <MobileNavContainer
        onClick={mobileHandleClick}
        id="fade-button"
        aria-controls={openMobileNav ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMobileNav ? 'true' : undefined}
      >
        <MobileNav sx={{ fontSize: '40px' }} />
      </MobileNavContainer>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={mobileAnchorEl}
        open={openMobileNav}
        onClose={mobileHandleClose}
        TransitionComponent={Fade}
      >
        <NavItem onClick={mobileHandleClose}>
          <TextNav>Pricing</TextNav>
        </NavItem>
        <NavItem onClick={mobileHandleClose}>
          <TextNav>How It Works</TextNav>
        </NavItem>
        <NavItem onClick={mobileHandleClose}>
          <TextNav>LogIn</TextNav>
        </NavItem>
        <NavItem onClick={handleClick}>
          <TextNav>Use Cases</TextNav>
        </NavItem>
      </Menu>
    </Wrapper>
  )
}

export default Header

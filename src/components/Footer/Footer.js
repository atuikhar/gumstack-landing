import { Grid } from '@mui/material'
import { Text, Img, ImgC, Wrapper, Hr } from './FooterStyles'

const Footer = () => {
  return (
    <>
      <Hr />
      <Wrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Img src="/FB.png" />
            <Img src="/In.png" />
            <Img src="/Tw.png" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            order={{ xs: 4, sm: 4, md: 2, lg: 2 }}
          >
            <Text style={{ textAlign: 'center' }}>
              <ImgC src="/c.png" />
              Copyright Gumstack Inc. 2020- All rights reserved
            </Text>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            order={{ xs: 2, sm: 2, md: 3, lg: 3 }}
          >
            <Text>Terms & Conditions</Text>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            order={{ xs: 3, sm: 3, md: 3, lg: 4 }}
          >
            <Text>Privacy Policy</Text>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  )
}

export default Footer

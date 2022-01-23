import { Grid } from '@mui/material'
import {
  Wrapper,
  HeroWrapper,
  Title,
  Text,
  Paragraph,
  SubmitEmail,
  Image,
  BtnText,
  Arrow,
  WrapContent,
} from './HeroStyles'

const Hero = () => {
  return (
    <Wrapper>
      <WrapContent>
        <Grid container spacing={1} sx={{ paddingTop: '50px' }}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <HeroWrapper>
              <Title>Meet Your Customers Face-to-Face</Title>
              <Text>Instantly on your website/app</Text>
              <Paragraph>
                Integrate video calling on your website or app in under 5
                minutes. Showcase your products, assist customers with their
                purchase or help resolve issues faster with video.
              </Paragraph>
              <SubmitEmail>
                <BtnText>
                  Register for a Demo
                  <Arrow src="/Arrow.png" />
                </BtnText>
              </SubmitEmail>
            </HeroWrapper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <WrapContent sx={{ marginTop: '50px' }}>
              <Image src="/Img.png" />
            </WrapContent>
          </Grid>
        </Grid>
      </WrapContent>
    </Wrapper>
  )
}

export default Hero

import { Grid } from '@mui/material'
import {
  Wrapper,
  HeroWrapper,
  Title,
  Text,
  Paragraph,
  SubmitEmail,
  Circle,
  Image1,
  Image2,
  ArrowIcon,
  BtnText,
} from './HeroStyles'

const Hero = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} xl={6} xxl={6}>
          <HeroWrapper>
            <Title>Meet Your Customers Face-to-Face</Title>
            <Text>Instantly on your website/app</Text>
            <Paragraph>
              Integrate video calling on your website or app in under 5 minutes.
              Showcase your products, assist customers with their purchase or
              help resolve issues faster with video.
            </Paragraph>
            <SubmitEmail>
              <BtnText>
                Register for a Demo
                <ArrowIcon sx={{ fontSize: '30px' }} />
              </BtnText>
            </SubmitEmail>
          </HeroWrapper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6} xxl={6}>
          <Circle>
            <Image1 src="/imagehalf.png" />
            <Image2 src="/play.png" />
          </Circle>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Hero
import { Grid, Container } from '@mui/material'
import {
  SeamlessWrapper,
  Wrapper,
  Title,
  Paragraph,
  Text,
  AllDevice,
  ShowImg,
  GetInTouch,
  BtnText,
  Arrow,
} from './SeamlessStyles'

const Seamless = () => {
  return (
    <>
      <SeamlessWrapper>
        <Wrapper>
          <Title>
            Seamless one-on-one conversations with your website visitors
          </Title>
          <Container
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paragraph>
              Allow your customers to call you whenever they need you. Connect
              them instantly to an agent without taking them away from your
              website.
            </Paragraph>
          </Container>
        </Wrapper>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <Wrapper>
              <Text>
                <AllDevice src="/All.png" />
                Works On All Devices
              </Text>
              <Text>
                <AllDevice src="/Option.png" />
                Optional Video For Customers
              </Text>
              <Text>
                <AllDevice src="/Click.png" /> One-Click Call From Browser
              </Text>
              <Text>
                <AllDevice src="/NoDownload.png" />
                No Download Needed
              </Text>
              <GetInTouch>
                <BtnText>
                  Get In Touch
                  <Arrow src="/Arrow.png" />
                </BtnText>
              </GetInTouch>
            </Wrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={7}>
            <Wrapper>
              <ShowImg src="/Show.png" />
            </Wrapper>
          </Grid>
        </Grid>
      </SeamlessWrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <hr
          style={{
            border: '4px solid #e6e6e6',
            boxShadow: '0px 4px 4px -4px #222',
            width: '70%',
            borderRadius: '5px',
          }}
        />
      </div>
    </>
  )
}

export default Seamless

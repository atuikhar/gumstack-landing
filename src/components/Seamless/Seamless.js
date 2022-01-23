import { Grid } from '@mui/material'
import {
  SeamlessWrapper,
  Wrap,
  Title,
  Paragraph,
  Text,
  AllDevice,
  ShowImg,
  GetInTouch,
  BtnText,
  Arrow,
  Div,
  Div1,
  Div2,
  Div3,
} from './SeamlessStyles'

const Seamless = () => {
  return (
    <>
      <SeamlessWrapper>
        <Title>
          Seamless one-on-one conversations with your website visitors
        </Title>
        <Wrap>
          <Paragraph>
            Allow your customers to call you whenever they need you. Connect
            them instantly to an agent without taking them away from your
            website.
          </Paragraph>
        </Wrap>
        <Grid container spacing={2} style={{ marginTop: '100px' }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Div>
              <Div2>
                <Div3>
                  <Text>
                    <AllDevice src="/All.png" />
                    Works On All Devices
                  </Text>
                  <Text>
                    <AllDevice src="/Option.png" />
                    1-Click video calls directly from browser
                  </Text>
                  <Text>
                    <AllDevice src="/Click.png" />
                    Optional video for customers
                  </Text>
                  <Text>
                    <AllDevice src="/NoDownload.png" />
                    No app downloads
                  </Text>
                  <Div1>
                    <GetInTouch>
                      <BtnText>
                        Get In Touch
                        <Arrow src="/Arrow.png" />
                      </BtnText>
                    </GetInTouch>
                  </Div1>
                </Div3>
              </Div2>
            </Div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ShowImg src="/Show.png" />
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

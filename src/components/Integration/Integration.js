import { Grid, ListItemAvatar } from '@mui/material'
import {
  IntegrationWrapper,
  Title,
  Text,
  ShowImg,
  TalkToDeveloper,
  BtnText,
  Arrow,
  Div,
  Div1,
  Div2,
  ListItemContainer,
  CheckIcon,
  Wrap,
  Wrap1,
} from './IntegrationStyles'

const Int = () => {
  return (
    <>
      <IntegrationWrapper>
        <Wrap>
          <Title>Integrate in under 5 minutes</Title>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={7}
              order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
            >
              <Div>
                <Div2>
                  <ListItemContainer>
                    <ListItemAvatar>
                      <CheckIcon src="/Vector.png" />
                    </ListItemAvatar>
                    <Text>
                      Integrate using Google Tag Manager, or add a few lines of
                      script to your website.
                    </Text>
                  </ListItemContainer>
                  <ListItemContainer>
                    <ListItemAvatar>
                      <CheckIcon src="/Vector.png" />
                    </ListItemAvatar>
                    <Text>
                      1-click installations for Shopify, Wordpress, Wix.
                    </Text>
                  </ListItemContainer>
                  <ListItemContainer>
                    <ListItemAvatar>
                      <CheckIcon src="/Vector.png" />
                    </ListItemAvatar>
                    <Text>
                      Install easily on Webflow, Squarespace and more.{' '}
                    </Text>
                  </ListItemContainer>
                </Div2>
              </Div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={5}
              order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
            >
              <Wrap1>
                <ShowImg src="/Techs.png" />
              </Wrap1>
            </Grid>
          </Grid>
        </Wrap>
        <Wrap>
          <Div1>
            <TalkToDeveloper>
              <BtnText>
                Talk To Our Developer
                <Arrow src="/Arrow.png" />
              </BtnText>
              <span
                style={{
                  color: '#000',
                  position: 'relative',
                  top: '25px',
                }}
              >
                Powered by Gumstack
              </span>
            </TalkToDeveloper>
          </Div1>
        </Wrap>
      </IntegrationWrapper>
    </>
  )
}

export default Int

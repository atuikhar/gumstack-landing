import { Grid, ListItemAvatar } from '@mui/material'
import {
  Wrapper,
  Text,
  Title,
  ListItemContainer,
  CheckIcon,
  IntegrationTechImage,
  TalkToDeveloper,
  Arrow,
  BtnText,
  WrapperDiv1,
} from './IntegrationStyles'

const Integration = () => {
  return (
    <Wrapper>
      <WrapperDiv1>
        <Title>Integrate in under 5 minutes</Title>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={7}
            order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
          >
            <ListItemContainer>
              <ListItemAvatar>
                <CheckIcon src="/Vector.png" />
              </ListItemAvatar>
              <Text>
                Integrate using Google Tag Manager, or add a few lines of script
                to your website.
              </Text>
            </ListItemContainer>
            <ListItemContainer>
              <ListItemAvatar>
                <CheckIcon src="/Vector.png" />
              </ListItemAvatar>
              <Text>1-click installations for Shopify, Wordpress, Wix.</Text>
            </ListItemContainer>
            <ListItemContainer>
              <ListItemAvatar>
                <CheckIcon src="/Vector.png" />
              </ListItemAvatar>
              <Text>Install easily on Webflow, Squarespace and more. </Text>
            </ListItemContainer>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          >
            <IntegrationTechImage src="/Techs.png" />
          </Grid>
        </Grid>
        <TalkToDeveloper>
          <BtnText>
            Talk To Our Developer
            <Arrow src="/Arrow.png" />
          </BtnText>
          <span style={{ color: '#000', position: 'relative', top: '25px' }}>
            Powered by Gumstack
          </span>
        </TalkToDeveloper>
      </WrapperDiv1>
    </Wrapper>
  )
}

export default Integration

import { Grid, ListItemAvatar } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  CheckIcon,
  ListItemContainer,
  GridContent,
  WrapperContent,
  GridWrapper,
  ShowImg,
  BtnText,
  Arrow,
  GetStarted,
  Wrapper1,
  Wrapper2,
} from './AppFlowStyles'

const AppFlow = () => {
  return (
    <>
      <Wrapper1>
        <Wrapper>
          <Paragraph>
            Worried about missing calls from customers? What if your team is
            busy or not available?
          </Paragraph>
          <Title>Let customers schedule calls when you are not around</Title>
        </Wrapper>
        <WrapperContent>
          <Grid container spacing={1}>
            <GridWrapper
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              sx={{ marginTop: '100px' }}
            >
              <ShowImg src="/Date.png" />
            </GridWrapper>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Paragraph>Schedule callback when you are not around </Paragraph>
              <GridContent>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>
                    Automatically capture contact details and schedule callback
                  </Text>
                </ListItemContainer>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>Book meeting only during your office hours</Text>
                </ListItemContainer>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>
                    Use any software to complete the call- Zoom, Meet, or just
                    phone
                  </Text>
                </ListItemContainer>
              </GridContent>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={7}
              order={{ xs: 5, sm: 5, md: 3, lg: 3 }}
            >
              <Paragraph>
                Sync your team’s calendar and manage schedules without a
                separate calendar software
              </Paragraph>
              <GridContent>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>Show availability across your agents’ calendar </Text>
                </ListItemContainer>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>
                    Send reminders so that they don’t forget their appointments
                  </Text>
                </ListItemContainer>
                <ListItemContainer>
                  <ListItemAvatar>
                    <CheckIcon src="/Vector.png" />
                  </ListItemAvatar>
                  <Text>Add calls to your calendar or CRM</Text>
                </ListItemContainer>
              </GridContent>
            </Grid>
            <GridWrapper
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              order={{ xs: 4, sm: 4 }}
              sx={{ marginTop: '100px' }}
            >
              <ShowImg src="/Form.png" />
            </GridWrapper>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              order={{ xs: 3, sm: 3, md: 5, lg: 5 }}
              sx={{ textAlign: 'center' }}
            >
              <GetStarted>
                <BtnText>
                  Let's Get Started
                  <Arrow src="/Arrow.png" />
                </BtnText>
              </GetStarted>
            </Grid>
          </Grid>
        </WrapperContent>
        <Wrapper2>
          <GetStarted>
            <BtnText>
              Get In Touch
              <Arrow src="/Arrow.png" />
            </BtnText>
          </GetStarted>
        </Wrapper2>
      </Wrapper1>
    </>
  )
}

export default AppFlow

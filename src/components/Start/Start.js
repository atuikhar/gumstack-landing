import {
  Wrapper,
  Title,
  Text,
  StartTrailButton,
  Div,
  Arrow,
} from './StartStyles'

const Start = () => {
  return (
    <>
      <Div>
        <Wrapper>
          <Title>Ready to meet your customers face to face?</Title>
          <StartTrailButton>
            <Text>
              Start Free Trial
              <Arrow src="/Arrow.png" />
            </Text>
          </StartTrailButton>
        </Wrapper>
      </Div>
    </>
  )
}

export default Start

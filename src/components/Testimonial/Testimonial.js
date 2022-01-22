import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  ImageWrapper,
  WrapperContainer,
  WrapperContainer2,
} from './TestimonialStyles'
import { Rating } from 'components/Rating/Rating'

const Testimonial = (props) => {
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <Title>You are in good company</Title>
          <Paragraph>
            Gumstack allows your customers to call you directly from your online
            store, and get them to video shop with the help of your agents
          </Paragraph>
          <ImageWrapper src="/TestLogo.png" />
          <Text>Sameen Eajaz</Text>
          <Paragraph>COO, Co-Founder, Koskii</Paragraph>
          <Rating />
          <Text>
            “The app is exactly what we were looking for and has helped us add
            another sales channel very quickly giving our customers a discovery
            platform to explore high asp products”
          </Text>
        </WrapperContainer>
        <WrapperContainer2>
          <Title>You are in good company</Title>
          <Paragraph>
            Gumstack allows your customers to call you directly from your online
            store, and get them to video shop with the help of your agents
          </Paragraph>
          <ImageWrapper src="/TestLogo2.png" />
          <Text>Ganesh Balakrishnan</Text>
          <Paragraph>Co-Founder, Flatheads</Paragraph>
          <Rating />
          <Text>
            “We engage with our audience and showcase the USP of our shoes,
            leading to quality customer conversions and a great overall
            experience.”
          </Text>
        </WrapperContainer2>
      </Wrapper>
    </>
  )
}

export default Testimonial

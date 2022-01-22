import { Card, CardContent } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  Image,
  Div,
  Wrapper1,
} from './FunctionalitiesStyles'
import { data } from 'constants/data'

const Functionalities = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Everything you need to support your customers over video call
        </Title>
        <Text>
          Just install your script, add your team and start delighting your
          customers.
        </Text>
      </Wrapper>
      <Wrapper1>
        <Div>
          {data.map((d, index) => {
            return (
              <Card key={index} sx={{ boxShadow: 'none' }}>
                <Image src={d.img} alt="img" />
                <CardContent sx={{ p: 0 }}>
                  <Text>{d.title}</Text>
                  <Paragraph>{d.description}</Paragraph>
                </CardContent>
              </Card>
            )
          })}
        </Div>
      </Wrapper1>
    </>
  )
}

export default Functionalities

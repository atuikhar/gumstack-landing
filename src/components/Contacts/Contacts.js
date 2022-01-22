import { Card, CardContent } from '@mui/material'
import {
  Wrapper,
  WrapperGrid,
  Text,
  Paragraph,
  PlayStoreButton,
  AppleStoreButton,
  Wrap,
  Wrap2,
} from './ContactsStyles'
import { contact } from 'constants/data'

const Contacts = () => {
  return (
    <Wrap>
      <WrapperGrid>
        {contact.map((c, index) => {
          return (
            <Card key={index} sx={{ boxShadow: 'none' }}>
              <CardContent>
                <Text>{c.title}</Text>
                {c.list.map((l, i) => {
                  return <Paragraph key={i}>{l}</Paragraph>
                })}
              </CardContent>
            </Card>
          )
        })}
      </WrapperGrid>
      <Wrapper>
        <Wrap2>
          <AppleStoreButton />
        </Wrap2>
        <Wrap2>
          <PlayStoreButton />
        </Wrap2>
      </Wrapper>
    </Wrap>
  )
}

export default Contacts

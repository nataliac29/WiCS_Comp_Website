import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ImageUploader from 'react-images-upload'
import {
  Welcome, InnerDiv, Button, Input, Input2, Container, FormDiv, UploadDiv, OuterDiv,
} from './styles'
import { GET_EVENTS } from './queries'


const AddEvent = () => {
  const [type, setType] = useState('')
  const { loading, error, data } = useQuery(GET_EVENTS, {
    onError: err => console.log(err),
  })
  if (loading) {
    return (
      <div>
        <Welcome style={{ fontSize: '3em', marginTop: '8vh' }}>
          Add Events!
        </Welcome>
        <Welcome style={{ fontSize: '1em', marginTop: '2vh', marginBottom: '3vh' }}>
          Use this form to track the events you&apos;ve attended.
        </Welcome>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <Welcome style={{ fontSize: '3em', marginTop: '8vh' }}>
          Add Events!
        </Welcome>
        <Welcome style={{ fontSize: '1em', marginTop: '2vh', marginBottom: '3vh' }}>
          Use this form to track the events you&apos;ve attended.
        </Welcome>
      </div>
    )
  }
  return (
    <div>
      <Welcome style={{ fontSize: '3em', marginTop: '8vh' }}>
        Add Events!
      </Welcome>
      <Welcome style={{ fontSize: '1em', marginTop: '2vh', marginBottom: '3vh' }}>
        Use this form to track the events you&apos;ve attended.
      </Welcome>
      <OuterDiv>
        <InnerDiv right={false}>
          <UploadDiv>
            <ImageUploader
              withIcon
              buttonText="Choose Image"
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              label="Max file size: 5mb, accepted: jpg, gif, png"
              buttonStyles={{ color: 'white', backgroundColor: '#dd9993' }}
              fileContainerStyle={{ borderWidth: '0' }}
            />
            <Button type="button" style={{ outline: 'none' }}>Add</Button>
          </UploadDiv>
          <FormDiv>
            <p style={{
              fontSize: '1em',
              fontFamily: "'Roboto', sans-serif",
              marginBottom: '0.5vh',
              color: 'black',
              fontWeight: 'medium',
              letterSpacing: '2px',
              lineHeight: '1em',
            }}
            >
              Event Name:
            </p>
            <select
              style={{
                width: '100%',
                fontSize: '1.2rem',
                borderRadius: '4px',
                borderWidth: '2px',
                borderColor: '#e26355',
                outline: 'none',
                fontFamily: "Roboto', sans-serif",
                color: 'black',
                marginBottom: '1vh',
              }}
              onChange={e => console.log(e.target.value)}
            >
              {data.events.map(({
                eventname,
              }) => <option>{eventname}</option>)}
            </select>
            <p style={{
              fontSize: '1em',
              fontFamily: "'Roboto', sans-serif",
              marginBottom: '0.5vh',
              color: 'black',
              fontWeight: 'medium',
              letterSpacing: '2px',
              lineHeight: '1em',
            }}
            >
              Type of Event:
            </p>
            <select
              style={{
                width: '100%',
                fontSize: '1.2rem',
                borderRadius: '4px',
                borderWidth: '2px',
                borderColor: '#e26355',
                outline: 'none',
                fontFamily: "Roboto', sans-serif",
                color: 'black',
                marginBottom: '2vh',
              }}
            >
              <option value="1">Small Social</option>
              <option value="2">Large Social</option>
              <option value="3">Sponsorship</option>
              <option value="4">Educational</option>
            </select>
            <Input2 placeholder="If you forgot to take a picture, write a brief description of the event" />
          </FormDiv>
        </InnerDiv>
      </OuterDiv>
    </div>
  )
}

export default AddEvent

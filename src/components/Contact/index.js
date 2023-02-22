import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
     setLetterClass('text-animate-hover');
    }, 3000);

    return() => {
     clearTimeout(timer);
    }
 });

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      'service_96uqaxg',
      'template_f0g6mjs',
      refForm.current,
      'yERxJF7n9zJddeDf_'
    )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Faild to send the message, please try again')
      }
    )
}

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            project works. However, if you have other request or question, 
            don't hesitste to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Eamil' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required/>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Aman Pratap Tyagi,
          <br/>
          India,
          <br/>
          Bijnor, 246726 <br/>
          Uttar Pradesh
          <span className='email'>tyagiaman113114@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[29.372442, 78.135849]} zoom={8}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[29.372442, 78.135849]}>
              <Popup>Aman lives here, come over for a cup of Tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact

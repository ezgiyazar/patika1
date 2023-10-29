import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2dcbym1', 'template_z885wkn', refForm.current, '44HAtKu1711jFts6J')
            .then(
                () => {
                    alert('Message sent')
                    window.location.reload(false)
                },
                (err) => {
                    alert('Failed to sent\n' + JSON.stringify(err))
                }
            )
    }
    // const initEmailServer = () => {
    //     alert('ben de son');
    //     emailjs.init('44HAtKu1711jFts6J');
    //     console.log('naber');
    // }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I,m ajfhkajhkfjhsakaljf;sdfghjkCS:fo;sdfghjk
                        ;KSF;.ksfhk;FJCS:fo;sdfghjkCS:fo;sdfghjk
                        LDJAHGKSYNRV;OISIUopOPIUEAOIDFGHCS:fo;sdfghjkJK
                        AL;FJOA;WS
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li >
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li >
                                    <textarea placeholder='Message' name='message' required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Ezgi Yazar,
                    <br />
                    Turkey,
                    <br />
                    Asli cikmazi no 8 <br />
                    <span>ezgi@entropia.works</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>
                                Ezgi lives here bitchez
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />

        </>
    )
}

export default Contact
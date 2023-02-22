// import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'm', 'a', 'n', ' ', 'P', 'r', 'a', 't', 'a', 'p', ' ', 'T', 'y', 'a', 'g', 'i']
    const jobArray  = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(() => {
        const timer = setTimeout(() => {
         setLetterClass('text-animate-hover');
        }, 3000);
 
        return() => {
         clearTimeout(timer);
        }
     });

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _1`}>i,</span>                 
                        <br/>
                        <span className={`${letterClass} _2`}>I</span>                 
                        <span className={`${letterClass} _3`}>'m</span>                 
                        <AnimatedLetters letterClass={letterClass} 
                        strArray={nameArray} idx={4} />
                        <br/>
                        <AnimatedLetters letterClass={letterClass} 
                        strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Front Developer / ReactJS / Fresher</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo/>
            </div>

            <Loader type='pacman'/>
        </>
    );    
}

export default Home
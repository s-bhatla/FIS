import React from 'react'
import fbimg from "../assets/fb-icon.png"
import linkedinimg from '../assets/linkedin-icon.png'
import twitterimg from '../assets/twitter-icon.png'
import instaimg from '../assets/insta_icon.png'

function Footer() {
  return (
    <footer id="footer" className='text-white sm:text-left text-center max-w-[100vw] '>
    <div className='sm:ml-[108px] sm:mr-[108px]'>
        <div className='grid sm:grid-cols-3 gap-4 pb-20 '>
            <div className="contactus mx-auto pl-4 pt-6">
                <div className='font-titilium text-[30px] font-extrabold mb-4'>HAVE ANY QUESTIONS?</div>
                <div className='font-light text-[16px] py-6'>Send your questions to
                <div className='text-[20px] font-normal'>IN48Partner@fisglobal.com</div></div>
            </div>
            <div className="connected mx-auto pt-6">
                <div className=''>Stay Connected</div>
                <div className="socialimgs flex justify-between">
                    <img src = {fbimg} width="32px" className='mr-2 my-2'></img>
                    <img src = {linkedinimg} width="32px" className='mr-2 my-2'></img>
                    <img src = {twitterimg} width="32px" className='mr-2 my-2'></img>
                    <img src = {instaimg} width="32px" className='mr-2 my-2'></img>

                </div>
            </div>
                <div className='support mx-auto pt-6'>
                    <a href=""><div className='py-2 pt-0'>Customer Support  <span className='arrow'>˃</span></div></a>
                    <a href=""><div className='py-2'>Terms of Use  <span className='arrow'>˃</span></div></a>
                    <a href=""><div className='py-2'>Privacy Policy  <span className='arrow'>˃</span></div></a>
                </div>
        </div>
        <div className="copyright text-center font-light text-sm py-6">
            © FIS 2022
        </div>
    </div>
    </footer>
  )
}

export default Footer
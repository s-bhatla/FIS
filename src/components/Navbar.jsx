import React, { useState } from 'react'
const Navbar = () => {
  let Links = [
    { name: "Themes", link: "/" },
    { name: "Your Challenge", link: "/" },
    { name: "Process", link: "/" },
    { name: "Event Info", link: "/" },
    { name: "Parameters", link: "/" },
    { name: "Prices", link: "/" },
    { name: "Criteria", link: "/" },
    { name: "Partners", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 mb-[2rem]'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-4'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <svg id="Group_2" data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="69.427" height="29" viewBox="0 0 69.427 29">
              <path id="Path_13" data-name="Path 13" d="M131.1,188.96a1.534,1.534,0,0,0-1.533-1.535H111.855a5.719,5.719,0,1,0,0,11.434h14.222a2.653,2.653,0,0,1,0,5.3H108.372a1.533,1.533,0,1,0,0,3.066h17.705a5.717,5.717,0,1,0,0-11.431H111.855a2.652,2.652,0,0,1,0-5.3h17.707a1.534,1.534,0,0,0,1.533-1.535" transform="translate(-62.505 -178.363)" fill="#fff" />
              <path id="Path_14" data-name="Path 14" d="M94.875,176.325a2.231,2.231,0,1,0-2.231,2.231,2.231,2.231,0,0,0,2.231-2.231" transform="translate(-57.513 -174.094)" fill="#fff" />
              <path id="Path_15" data-name="Path 15" d="M84.415,176.325a2.231,2.231,0,1,0-2.231,2.231,2.231,2.231,0,0,0,2.231-2.231" transform="translate(-54.163 -174.094)" fill="#fff" opacity="0.8" />
              <path id="Path_16" data-name="Path 16" d="M73.953,176.325a2.231,2.231,0,1,0-2.23,2.231,2.231,2.231,0,0,0,2.23-2.231" transform="translate(-50.813 -174.094)" fill="#fff" opacity="0.6" />
              <path id="Path_17" data-name="Path 17" d="M63.493,176.325a2.231,2.231,0,1,0-2.23,2.231,2.23,2.23,0,0,0,2.23-2.231" transform="translate(-47.463 -174.094)" fill="#fff" opacity="0.4" />
              <path id="Path_18" data-name="Path 18" d="M53.033,176.325a2.231,2.231,0,1,0-2.23,2.231,2.23,2.23,0,0,0,2.23-2.231" transform="translate(-44.113 -174.094)" fill="#fff" opacity="0.2" />
              <g id="Group_3" data-name="Group 3" transform="translate(0 9.063)">
                <path id="Path_19" data-name="Path 19" d="M67.245,187.427c-.048,0-.094.009-.139.014v-.014H52.047c-5.982,0-10.035,3.916-10.035,9.9v8.366a1.672,1.672,0,1,0,3.344,0v-8.366c0-4.147,2.509-6.831,6.691-6.831H67.106v-.014c.046,0,.092.014.139.014a1.533,1.533,0,1,0,0-3.067" transform="translate(-42.012 -187.427)" fill="#fff" />
                <path id="Path_20" data-name="Path 20" d="M49.394,201.266a1.534,1.534,0,0,0,1.534,1.535H66.263a1.534,1.534,0,0,0,0-3.068H50.928a1.534,1.534,0,0,0-1.534,1.534" transform="translate(-44.376 -191.368)" fill="#fff" />
              </g>
              <path id="Path_21" data-name="Path 21" d="M91.233,188.9v16.729a1.674,1.674,0,1,0,3.347,0V188.9a1.674,1.674,0,0,0-3.347,0" transform="translate(-57.775 -178.299)" fill="#fff" />
            </svg>

          </span>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden bg-black'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:bg-black md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <div>
              <li key={link.name} className='md:ml-6 text-md md:my-0 my-7'>
                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
              </div>
            ))
          }
          <li key="contact" className='md:ml-6 text-md md:my-0 my-7 mx-[2rem]'>
                <a href="/"className='text-white hover:text-gray-400 duration-500'>Contact Us</a>
              </li>
          <button>
            <a href="#" class="text-md px-4 py-3 leading-none border-[0.2px] mr-[3rem] rounded-full text-black bg-white font-bold hover:bg-black hover:text-white">Register now</a>
          </button>
        </ul>
      </div>
    </div>

  )
}

export default Navbar

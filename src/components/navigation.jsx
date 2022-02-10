// import { Box } from "@material-ui/core";
import Rogan_mark01 from "../assets/images/rogan/mark01.png";


export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='page-scroll' href='#page-top'>
            <div style={{ display: 'flex', alignItems:'center'}}>
              <div style={{ display: 'flex' }}>
                <img src={Rogan_mark01} width="50px" height="50px" alt="mark" />
              </div>
              {/* <div style={{ display: 'flex', alignItems: 'center', marginLeft:"10px" }}>
                <Box color={"white"} fontSize="24px">ROGAN</Box>
              </div> */}
            </div></a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Information
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Live Feed
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

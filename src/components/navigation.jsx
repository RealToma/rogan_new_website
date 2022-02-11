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
                <img src={Rogan_mark01} width="50px" height="60px" alt="mark" />
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
              <a href='https://www.dextools.io/app/bsc/pair-explorer/0x94ee98d569bbd651b49bce3c1278d501d139388a' target="_blank" rel="noreferrer" className='page-scroll'>
                DexTools
              </a>
            </li>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Information
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            <li>
              <a href='#roadmap' className='page-scroll' >
                Roadmap
              </a>
            </li>
            <li>
              <a href='https://bscscan.com/token/0xE42F8Cb4acdE0C81202171a3faF7ED14a33AabeE?a=0x686c626E48bfC5DC98a30a9992897766fed4Abd3'  target="_blank" rel="noreferrer" className='page-scroll'>
                Contract
              </a>
            </li> 
            <li>
              <a href='https://twitter.com/rogancoin1' className='page-scroll' target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href='https://t.me/rogancoin' className='page-scroll' target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a display="flex" href="https://files.secure.website/wscfus/10684517/29826499/rogan.pdf" className='page-scroll' target="_blank" rel="noreferrer">
                Litepaper
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Brandy
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
            </li>*/}

          </ul>
        </div>
      </div>
    </nav>
  )
}

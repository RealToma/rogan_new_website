export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Where <span className="text-color-primary">Ideas</span> Roam Freely
                </h1> */}
                <h1 className="mt-0 mb-16 reveal-from-bottom">
                  Where <span style={{color:"#14f195"}}>Ideas</span> Roam Freely
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

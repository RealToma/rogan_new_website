export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>This Is How We Do</h2>
          <p>
            By leveraging open-source technologies such as PeerTube’s content delivery framework and
            blockchain, we are able to provide a censorship resistant platform. ROGAN has real-time content
            monetization using Blockchain technology. Our platform does not rely on ads or third parties.

          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}
                <i className={d.icon}></i>
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

export default function Card(props) {

  console.log(props)

  return (
    <div className="card">
      <img src="" alt="" className="card-image" />
      <div className="card-content">
        <div className="local-container">
            <img src="" alt="" className="location-pin" />
            <span className="location-name"></span>
            <a href="" className="location-link">View on Google Maps</a>
        </div>
        <h2 className="card-title"></h2>
        <span className="card-datestamp"></span>
        <p className="card-description"></p>
      </div>
    </div> 
  )
}
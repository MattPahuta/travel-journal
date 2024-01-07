import locationPin from "../assets/marker.svg"

export default function Card(props) {

  console.log(props)

  return (
    <div className="card">
      <img src={props.card.imageUrl} alt="" className="card-image" />
      <div className="card-content">
        <div className="local-container">
            <img src={locationPin} alt="" className="location-pin" />
            <span className="location-name">{props.card.location}</span>
            <a href={props.card.googleMapsUrl} className="location-link">View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.card.title}</h2>
        <span className="card-datestamp">{props.card.startDate} - {props.card.endDate}</span>
        <p className="card-description">{props.card.description}</p>
      </div>
    </div> 
  )
}
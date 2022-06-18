

function Card(props) {
    console.log(props)
    return (
        <div className="card--container">
            <div className="card--image">
                <div className="right--top--card">
                    <img className="card--img" src={props.item.imageUrl} alt=""/>
                    <div className="flex--column">
                        <div className="test">
                            <i class="fa-solid fa-location-pin"></i>
                            <p className="location"> {props.item.location} </p>
                            <a className="location--link" target="_blank" href={props.item.googleMapsUrl} >view on google map</a>
                        </div>
                        <h1>{props.item.title}</h1>
                        <div className="test">
                            <p className="location--date">{props.item.startDate} - </p>
                            <p className="location--date"> {props.item.endDate}</p>
                        </div>
                        <p className="location--description">{props.item.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
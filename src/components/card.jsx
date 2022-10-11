import { Link } from "react-router-dom";

export default function Card(carddata) {
	return (
    <div style={{display: "inline-flex"}}>
			<div className="userCards">
			 {/* <Link to={`/person/${carddata.id}`}> */}
				<p>{carddata.id}</p>
          <img className="img" src={carddata.avatar} alt="" />
        <div className="box">
          <p>{carddata.name}</p>
          <p>{carddata.Country}</p>
        </div>
			</div>
    </div>
	);
}
import './Card.css'

function Card({ title, imgUrl, isVisited }) {
    const object = isVisited === true ? "✔️ ce l'ho" : "❌ non ce l'ho";

    return (
        <div className="card_object">
            <div className="top_card">
                <img src={imgUrl} alt="logo" />
            </div>
            <div className="body_card">
                <h6>{title}</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quidem.</p>
                <span>{object}</span>

            </div>
        </div>
    );


}

export default Card;
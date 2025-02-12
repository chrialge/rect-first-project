import { useState } from 'react';
import './CardForm.css';

function CardForm({ addCity }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        isVisited: false,
    })

    const hadleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue
        });
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        const city = {
            id: 6,
            title: formData.title,
            image: formData.image,
            isVisited: formData.isVisited
        };

        addCity(city);
    }

    return (
        <form onSubmit={hadleSubmit} className="container_form">
            <div className="container_input">
                <label htmlFor="title">Nome</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={hadleInputChange} />
            </div>
            <div className="container_input">
                <label htmlFor="image">Immagine</label>
                <input type="text" name="image" id="image" value={formData.image} onChange={hadleInputChange} />
            </div>
            <div className="container_input">
                <label htmlFor="isVisited">Visitata?</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={hadleInputChange} />
            </div>
            <button type="submit">
                aggiungi
            </button>
        </form>
    );
};

export default CardForm;
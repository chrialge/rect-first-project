import { useState } from 'react';
import './CardForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/citiesSlice';


function CardForm() {
    const value = useSelector((state) => state.cities.value);
    const dispatch = useDispatch();
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
            id: value.length,
            title: formData.title,
            image: formData.image,
            isVisited: formData.isVisited
        };

        setFormData({
            title: "",
            image: "",
            isVisited: false
        })

        dispatch(add(city));
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
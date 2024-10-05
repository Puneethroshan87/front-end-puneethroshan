
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ addToOrder }) => {
    const [dishes, setDishes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDishes = async () => {
            const response = await axios.get('https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968');
            setDishes(response.data.record);
        };

        fetchDishes();
    }, []);

    return (
        <div className="menu">
                     <h2>Menu</h2>
                     {error && <p style={{ color: 'red' }}>{error}</p>}
                     <div className="dishes">
                      {dishes.map((dish) => (
                            dish.available_quantity > 0 && (
                                <div className="card" key={dish.id}>
                                    <img src={dish.image_url} alt={dish.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                    <h3>{dish.name}</h3>
                                    <p>Price: ₹{dish.price.toFixed(2)}</p>
                                    <p>Available: {dish.available_quantity}</p>
                                    <p>Category: {dish.sub_category}</p>
                                    <p>Type: {dish.type}</p>
                                    <button onClick={() => addToOrder(dish)}>Add to Order</button>
                                </div>
                            )
                        ))}
                    </div>
                </div>
    );
};

export default Menu;


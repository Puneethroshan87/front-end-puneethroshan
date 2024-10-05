
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import './App.css'; 

const App = () => {
    const [order, setOrder] = useState({ dishes: [], total: 0, tableNumber: '', date: '', time: '' });
    const [orderHistory, setOrderHistory] = useState([]);

    const addToOrder = (dish) => {
        setOrder(prevOrder => {
            const newDishes = [...prevOrder.dishes, dish];
            const newTotal = newDishes.reduce((sum, current) => sum + current.price, 0);
            return { ...prevOrder, dishes: newDishes, total: newTotal };
        });
    };

    const removeFromOrder = (index) => {
        setOrder(prevOrder => {
            const newDishes = prevOrder.dishes.filter((_, i) => i !== index);
            const newTotal = newDishes.reduce((sum, current) => sum + current.price, 0);
            return { ...prevOrder, dishes: newDishes, total: newTotal };
        });
    };

    const placeOrder = () => {
        const orderDetails = {
            ...order,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        setOrderHistory(prevHistory => [...prevHistory, orderDetails]);
        setOrder({ dishes: [], total: 0, tableNumber: '', date: '', time: '' }); // Reset order
    };

    return (
        <div className="App">
            <Menu addToOrder={addToOrder} />
            <h2>Your Order</h2>
            <Order order={order} removeFromOrder={removeFromOrder} />
            <input 
                type="text" 
                placeholder="Table Number" 
                value={order.tableNumber} 
                onChange={e => setOrder({ ...order, tableNumber: e.target.value })} 
            />
            <button onClick={placeOrder}>Place Order</button>
            <h2>Order History</h2>
            <div>
                {orderHistory.map((o, index) => (
                    <div key={index}>
                        <h4>Order {index + 1}</h4>
                        <Order order={o} removeFromOrder={() => {}} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

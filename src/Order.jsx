
import React from 'react';

const Order = ({ order, removeFromOrder }) => (
    <div className="order">
        <h4>Order Details:</h4>
        {order.dishes.map((dish, index) => (
            <div key={index}>
                <span>{dish.name} - ${dish.price}</span>
                {/* <button onClick={() => removeFromOrder(index)}>Remove</button> */}
            </div>
        ))}
        <div>Total: ₹{order.total}</div>
        <div>Table Number: {order.tableNumber}</div>
        <div>Date: {order.date}</div>
        <div>Time: {order.time}</div>
    </div>
);

export default Order;

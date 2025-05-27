import React from 'react';

export function App(props) {
  const [orders, setOrders] = React.useState([
    { id: 1, customer: 'Alice', pickupTime: '10:00 AM' },
    { id: 2, customer: 'Bob', pickupTime: '11:00 AM' },
    { id: 3, customer: 'Isa', pickupTime: '5:00 PM' },
  ]);

  // Delete the entire order object by index
  const DeleteHandler = (removeIndex) => {
    setOrders(prevOrders =>
      prevOrders.filter((_, index) => index !== removeIndex)
    );
  };

  return (
    <div className='App'>
      {orders.map((item, index) => (
        <div key={item.id}>
          <p>
            {item.customer}: {item.pickupTime}
          </p>
          <button onClick={() => DeleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

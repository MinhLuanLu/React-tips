import React from 'react';

export function App(props) {
  const [orders, setOrders] = React.useState([
    { id: 1, customer: 'Alice', pickupTime: '10:00 AM' },
    { id: 2, customer: 'Bob', pickupTime: '11:00 AM' },
    { id: 3, customer: 'Isa', pickupTime: '5:00 PM' }, // also fixed "17:00 AM"
  ]);

  // Function to remove 'pickupTime' from a specific order based on its index
  const DeleteHandler = (removeIndex) => {
    setOrders(prevOrders =>
      prevOrders.map((order, index) => {
        if (index === removeIndex) {
          const { pickupTime, ...rest } = order; // remove 'pickupTime'
          return rest;
        }
        return order;
      })
    );
  };

  return (
    <div className='App'>
      {orders.map((item, index) => (
        <div key={item.id}> {/* Use item.id instead of index for a better key */}
          <p>
            {item.customer}: {item.pickupTime ? item.pickupTime : 'No pickup time'}
          </p>
          <button onClick={() => DeleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

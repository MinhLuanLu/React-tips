const updatePickupTime = (indexToUpdate, newPickupTime) => {
  setOrders(prevOrders =>
    prevOrders.map((order, index) =>
      index === indexToUpdate
        ? { ...order, pickupTime: newPickupTime }  // update this order
        : order  // leave others unchanged
    )
  );
};

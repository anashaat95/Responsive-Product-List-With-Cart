const EmptyCart = () => {
  return (
    <div className="cart--empty">
      <img src="./../../../public/images/illustration-empty-cart.svg" alt="Empty Cart Illustration" />
      <p className="cart--note">Your added items will appear here</p>
    </div>
  );
};

export default EmptyCart;

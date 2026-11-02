import "./App.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="2103882.jpg"
        alt="Range Rover Velar"
      />

      <div className="product-info">
        <h2>Range Rover Velar</h2>

        <p className="description">
          Premium SUV with exceptional performance and luxury features.
        </p>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span> (5 stars Safety rating)</span>
        </div>

        <div className="bottom">
          <h3>₹90,89,999</h3>
          <button>Add to Cart for test drive</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ProductCard />
    </div>
  );
}

export default App;
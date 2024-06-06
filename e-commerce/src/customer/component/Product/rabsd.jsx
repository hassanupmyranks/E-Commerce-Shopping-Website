<img src={shirt1} alt="" />
      {/* <img src={product.image} alt={product.name} className="product-image" /> */}
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <div className="product-sizes">
          <h4>Sizes:</h4>
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="product-colors">
          <h4>Colors:</h4>
          {product.colors.map((color) => (
            <button
              key={color}
              className={`color-button ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            ></button>
          ))}
        </div>
        <div className="product-reviews">
          <h4>Reviews:</h4>
          <p>{product.reviews} stars</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
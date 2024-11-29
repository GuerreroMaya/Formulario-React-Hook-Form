import React from "react";
import ProductForm from "../Components/ProductForm";

const AddProduct = () => {
  // FETCH PARA ENVIO A FIREBASE
  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://rep-kod-abril-24-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        alert("Product added successfully");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registra un Nuevo Producto</h2>
      <ProductForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddProduct;

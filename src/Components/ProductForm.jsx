import React from "react";
import { useForm } from "react-hook-form";
import FormField from "../Components/FormField";

const ProductForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="custom-form p-4 rounded shadow"
      >
        <FormField
          label="Categoría"
          id="category"
          register={register}
          validation={{ required: "Categoría es requerida" }}
          errors={errors}
          type="select"
        >
          <option value="">Selecciona una categoría</option>
          <option value="Electronics">Electrónicos</option>
          <option value="Books">Libros</option>
          <option value="Clothing">Ropa</option>
          <option value="Food">Comida</option>
        </FormField>

        <FormField
          label="Descripción"
          id="description"
          register={register}
          validation={{
            required: "Descripción es requerida",
            maxLength: {
              value: 35,
              message: "La descripción debe tener máximo 35 caracteres",
            },
          }}
          errors={errors}
          placeholder="Describe el producto, máximo 35 caracteres"
        />

        <FormField
          label="Nombre"
          id="name"
          register={register}
          validation={{
            required: "Nombre es requerido",
            minLength: {
              value: 4,
              message: "Nombre debe tener un mínimo de 4 caracteres",
            },
          }}
          errors={errors}
          placeholder="Ingresa nombre del producto"
        />

        <FormField
          label="URL de la Imagen"
          id="picture"
          register={register}
          validation={{ required: "URL de la imagen es requerida" }}
          errors={errors}
          placeholder="Ingresa URL de la imagen del producto"
        />

        <FormField
          label="Price"
          id="price"
          register={register}
          validation={{
            required: "Precio es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "El Precio solamente acepta números",
            },
          }}
          errors={errors}
          placeholder="Ingresa precio del producto"
        />

        <div className="text-end">
          <button type="submit" className="btn btn-primary btn-block mt-5">
            Añadir Producto
          </button>
        </div>
      </form>

      <div className="info-text mt-4 text-center">
        <p>
          Realizado con <strong>React Hook Form</strong>, hook <strong>useForm</strong>, <br />
          Estructurado en <strong>Components</strong>, <strong>Pages</strong>, <br />
          Fetch Async con <strong>Firebase</strong>.
        </p>
      </div>
    </div>
  );
};

export default ProductForm;
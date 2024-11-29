import React from "react";

const FormField = ({ label, id, register, validation, errors, type = "text", placeholder = "", children }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select id={id} className="form-control" {...register(id, validation)}>
          {children}
        </select>
      ) : (
        <input id={id} type={type} className="form-control" placeholder={placeholder} {...register(id, validation)} />
      )}
      {errors[id] && <div className="text-danger">{errors[id].message}</div>}
    </div>
  );
};

export default FormField;

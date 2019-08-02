import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';

function FieldList(props) {
  const {
    list, touched, errors, handleChange,
  } = props;

  return list.map((field) => {
    const {
      id, required, autoFocus, label, component, render,
      margin = 'normal', variant = 'outlined', className = id,
      fullWidth = true, ...restProps
    } = field;

    if (render) {
      return (
        <Field
          key={id}
          id={id}
          name={id}
          render={render}
        />
      );
    }

    return (
      <Field
        key={id}
        id={id}
        name={id}
        label={label}
        required={required}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        variant={variant}
        margin={margin}
        error={Boolean(touched[id] && errors[id])}
        helperText={touched[id] && errors[id]}
        component={component}
        className={className}
        onChange={handleChange}
        {...restProps}
      />
    );
  });
}


export default function useFormikForm({ fields, schema, onSubmit }) {
  const initialValues = fields
    .filter(({ defaultValue }) => typeof defaultValue !== 'undefined')
    .reduce((acc, { id }) => ({ ...acc, [id]: '' }), {});
  return () => (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      render={(formProps) => {
        const {
          errors, touched, handleChange, handleSubmit,
        } = formProps;
        return (
          <form
            noValidate
            autoComplete="off"
            className="form"
            onSubmit={handleSubmit}
          >
            <FieldList
              list={fields}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
            />
          </form>
        );
      }}
    />
  );
}

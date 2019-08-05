import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import Grid from '@material-ui/core/Grid';

export default function FormikForm({ fields = [], schema, onSubmit }) {
  const initialValues = fields
    .filter(({ defaultValue }) => typeof defaultValue !== 'undefined')
    .reduce((acc, { id }) => ({ ...acc, [id]: '' }), {});

  return (
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
            <Grid container spacing={2}>
              <FieldList
                list={fields}
                touched={touched}
                errors={errors}
                handleChange={handleChange}
              />
            </Grid>
          </form>
        );
      }}
    />
  );
}

const fieldItemWrapper = {
  component: Grid,
  props: {
    item: true,
    xs: 12,
  },
};

function FieldList(props) {
  const {
    list, touched, errors, handleChange,
  } = props;

  return list.map((field) => {
    const {
      id, required, autoFocus, label, component, render,
      margin = 'normal', variant = 'outlined', className = id, fullWidth = true,
      wrapper: { props: wrapperProps, component: WrapperComponent } = fieldItemWrapper,
      ...restProps
    } = field;

    return (
      <WrapperComponent key={id} {...wrapperProps}>
        {render ? (
          <Field
            key={id}
            id={id}
            name={id}
            render={render}
          />
        ) : (
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
        )}
      </WrapperComponent>
    );
  });
}

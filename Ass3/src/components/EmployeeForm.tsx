// Joshua dyck adapted code from Formik docs

import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";

export const Employees = (props) => (
  <Formik
    initialValues={{ email: "", phoneNum: "", name: "", sin: "", password: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        <TextInput
          onChangeText={handleChange("phone number")}
          onBlur={handleBlur("phone number")}
          value={values.phoneNum}
        />
        <TextInput
          onChangeText={handleChange("Name")}
          onBlur={handleBlur("Name")}
          value={values.name}
        />
        <TextInput
          onChangeText={handleChange("Social insurance number")}
          onBlur={handleBlur("phone number")}
          value={values.sin}
        />
        <TextInput
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

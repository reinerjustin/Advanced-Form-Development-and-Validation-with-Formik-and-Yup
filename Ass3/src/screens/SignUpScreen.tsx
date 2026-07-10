import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { signUpSchema } from "@/validation/authSchema";
import { router } from "expo-router";
import { useState } from "react";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUpScreen() {

    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);

        router.push("/signin");
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            validateOnMount
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
            }) => (
                <View>

                    <Text>Full Name</Text>
                    <TextInput
                        value={values.fullName}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                    />

                    {touched.fullName && errors.fullName && (
                        <Text>{errors.fullName}</Text>
                    )}

                    <Text>Email</Text>
                    <TextInput
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        keyboardType="email-address"
                    />

                    {touched.email && errors.email && (
                        <Text>{errors.email}</Text>
                    )}

                    <Text>Password</Text>
                    <TextInput
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        secureTextEntry={!showPassword}
                    />

                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Text>
                            {showPassword ? "Hide" : "Show"}
                        </Text>
                    </Pressable>

                    <Text>Confirm Password</Text>
                    <TextInput
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        secureTextEntry={!showConfirmPassword}
                    />

                    <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Text>
                            {showConfirmPassword ? "Hide" : "Show"}
                        </Text>
                    </Pressable>

                    <Pressable
                        disabled={!isValid}
                        onPress={() => handleSubmit()}
                    >
                        <Text>Sign Up</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => router.back()}
                    >
                        <Text>
                            Already have an account?
                        </Text>
                    </Pressable>

                </View>
            )}
        </Formik>
    );
}
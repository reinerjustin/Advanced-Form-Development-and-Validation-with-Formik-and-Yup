import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { signInSchema } from "@/validation/authSchema";
import { useState } from "react";

const initialValues = {
    email: "",
    password: "",
};

export default function SignInScreen() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            validateOnMount
            onSubmit={(values) => {
                console.log(values);

                router.push("/employee");
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                resetForm
            }) => (
                <View>

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

                    <Pressable  
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Text>
                            {showPassword ? "Hide" : "Show"}
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => resetForm()}
                    >
                        <Text>
                            Reset
                        </Text>
                    </Pressable>

                    <Pressable
                        disabled={!isValid}
                        onPress={() => handleSubmit()}
                    >
                        <Text>
                            Sign In
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => router.push("/signup")}
                    >
                        <Text>
                            Create Account
                        </Text>
                    </Pressable>

                </View>
            )}
        </Formik>
    );
}
import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { signInSchema } from "@/validation/authSchema";
import { useState } from "react";

const initialValues = {
    email: "",
    password: "",
};

const mockApi = () => new Promise((resolve) => 
    setTimeout(resolve, 1000));

export default function SignInScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            validateOnMount
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    console.log(values);

                    await mockApi();
                    
                    router.push("/employee");
                } finally {
                setSubmitting(false);
                }
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
                isSubmitting,
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

                    {touched.password && errors.password && (
                        <Text>{errors.password}</Text>
                    )}

                    <Pressable
                        disabled={isSubmitting}
                        onPress={() => resetForm()}
                    >
                        <Text>
                            Reset
                        </Text>
                    </Pressable>

                    <Pressable
                        disabled={!isValid || isSubmitting}
                        onPress={() => handleSubmit()}
                    >
                        {isSubmitting ? (
                            <View>
                                <ActivityIndicator />
                                <Text>Signing in...</Text>
                            </View>
                        ) : (
                            <Text>Sign In</Text>
                        )}
                    </Pressable>

                    <Pressable
                        onPress={() => router.push("/signup")}
                    >
                        <Text>
                            Don't have an account? Register.
                        </Text>
                    </Pressable>

                </View>
            )}
        </Formik>
    );
}
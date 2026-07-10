import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";
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

const mockApi = () => new Promise((resolve) =>
    setTimeout(resolve, 2000));

export default function SignUpScreen() {

    const handleSubmit = async (values: typeof initialValues,
        { setSubmitting } : { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            console.log(values);

            await mockApi();

            router.push("/signin");
        } finally {
            setSubmitting(false);
        }
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
                isSubmitting,
                resetForm
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

                    {touched.password && errors.password && (
                        <Text>{errors.password}</Text>
                    )}

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

                    {touched.confirmPassword && errors.confirmPassword && (
                        <Text>{errors.confirmPassword}</Text>
                    )}

                    <Pressable
                        disabled={isSubmitting}
                        onPress={() => resetForm()}
                    >
                        <Text>
                            Clear Form
                        </Text>
                    </Pressable>

                    <Pressable
                        disabled={!isValid || isSubmitting}
                        onPress={() => handleSubmit()}
                    >
                        {isSubmitting ? (
                            <View>
                                <ActivityIndicator />
                                <Text>Signing up...</Text>
                            </View>
                        ) : (
                            <Text>Sign Up</Text>
                        )}
                    </Pressable>

                    <Pressable
                        onPress={() => router.back()}
                    >
                        <Text>
                            Already have an account? Sign in.
                        </Text>
                    </Pressable>

                </View>
            )}
        </Formik>
    );
}
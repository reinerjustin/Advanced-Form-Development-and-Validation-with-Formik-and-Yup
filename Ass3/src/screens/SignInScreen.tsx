import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { signInSchema } from "@/validation/authSchema";

const initialValues = {
    email: "",
    password: "",
};

export default function SignInScreen() {
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
                        secureTextEntry
                    />

                    {touched.password && errors.password && (
                        <Text>{errors.password}</Text>
                    )}

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
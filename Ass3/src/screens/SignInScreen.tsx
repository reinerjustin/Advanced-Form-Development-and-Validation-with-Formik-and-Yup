import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInSchema } from "@/validation/authSchema";
import { router } from "expo-router";

const initialValues = {
    email: "",
    password: "",
};

export default function SignInScreen() {

    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);

        router.push("/employee");
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            validateOnMount
            onSubmit={(values) => console.log(values)}
        >
            {({ isValid }) => (
                <Form>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <button type="submit" disabled={!isValid}>
                        Sign In
                    </button>

                    <button type="button" onClick={() => router.push("/signup")}>
                        Create Account
                    </button>
                </Form>
            )}
        </Formik>
    );
}
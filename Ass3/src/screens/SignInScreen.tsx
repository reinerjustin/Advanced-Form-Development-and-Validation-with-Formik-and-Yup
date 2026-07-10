import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInSchema } from "@/validation/authSchema";

const initialValues = {
    email: "",
    password: "",
};

export default function SignInScreen({ navigation }: any) {
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

                    <button type="button" onClick={() => navigation.navigate("SignUp")}>
                        Create Account
                    </button>
                </Form>
            )}
        </Formik>
    );
}
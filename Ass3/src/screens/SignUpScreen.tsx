import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpSchema } from "@/validation/authSchema";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUpScreen({ navigation }: any) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            validateOnMount
            onSubmit={(values) => console.log(values)}
        >
            {({ isValid }) => (
                <Form>
                    <Field name="fullName" />
                    <ErrorMessage name="fullName" component="div" />

                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <Field name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" component="div" />

                    <button type = "submit" disabled={!isValid}>
                        Sign Up
                    </button>

                    <button type="button" onClick={() => navigation.goBack()}>
                        Already have an account?
                    </button>
                </Form>
            )}
        </Formik>
    );
}
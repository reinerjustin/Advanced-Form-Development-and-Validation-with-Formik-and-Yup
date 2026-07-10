import { Formik, Form, Field, ErrorMessage } from "formik";
import { employeeSchema } from "@/validation/employeeSchema";
import { router } from "expo-router";

interface EmployeeFormValues {
    employeeId: string;
    fullName: string;
    address: string;
    email: string;
    phone: string;
    positionTitle: string;
    department: string;
    dateOfHire: string;

}
const initialValues: EmployeeFormValues = {
    employeeId: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    positionTitle: "",
    department: "",
    dateOfHire: "",
};

function EmployeeForm() {
    const handleSubmit = (values: EmployeeFormValues) => {
        console.log(values);
        alert("Employee information submitted successfully!");

        router.push("/")
    };

    return (
        <Formik<EmployeeFormValues>
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={handleSubmit}
        validateOnMount
        >
            {({ isValid }) => (
                <Form>

                    <div>
                        <label htmlFor="employeeId">Employee ID</label>
                        <Field id="employeeId" name="employeeId" type="text" />
                        <ErrorMessage name="employeeId" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <Field id="fullName" name="fullName" type="text" />
                        <ErrorMessage name="fullName" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <Field id="address" name="address" type="text" />
                        <ErrorMessage name="address" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field id="phone" name="phone" type="text" />
                        <ErrorMessage name="phone" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="positionTitle">Position Title</label>
                        <Field id="positionTitle" name="positionTitle" type="text" />
                        <ErrorMessage name="positionTitle" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="department">Department</label>
                        <Field id="department" name="department" type="text" />
                        <ErrorMessage name="department" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="dateOfHire">Date of Hire</label>
                        <Field id="dateOfHire" name="dateOfHire" type="date" />
                        <ErrorMessage name="dateOfHire" component="div" className="error" />
                    </div>
                    
                    <button type="submit" disabled={!isValid}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default EmployeeForm;
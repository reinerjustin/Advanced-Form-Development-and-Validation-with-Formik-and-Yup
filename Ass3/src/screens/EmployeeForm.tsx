import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";
import { Formik } from "formik";
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

const mockApi = () => new Promise((resolve) => 
    setTimeout(resolve, 2000));

function EmployeeForm() {
    const handleSubmit = async (values: EmployeeFormValues, 
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
        try {
            console.log(values);

            await mockApi();

            alert("Employee information submitted successfully!");

            router.push("/");
        } finally {
            setSubmitting(false);
        } 
    };

    return (
        <Formik<EmployeeFormValues>
            initialValues={initialValues}
            validationSchema={employeeSchema}
            onSubmit={handleSubmit}
            validateOnMount
            validateOnChange
            validateOnBlur
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

                    <Text>Employee ID</Text>
                    <TextInput
                        value={values.employeeId}
                        onChangeText={handleChange("employeeId")}
                        onBlur={handleBlur("employeeId")}
                    />
                    {touched.employeeId && errors.employeeId && (
                        <Text>{errors.employeeId}</Text>
                    )}

                    <Text>Full Name</Text>
                    <TextInput
                        value={values.fullName}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                    />
                    {touched.fullName && errors.fullName && (
                        <Text>{errors.fullName}</Text>
                    )}

                    <Text>Address</Text>
                    <TextInput
                        value={values.address}
                        onChangeText={handleChange("address")}
                        onBlur={handleBlur("address")}
                    />
                    {touched.address && errors.address && (
                        <Text>{errors.address}</Text>
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

                    <Text>Phone</Text>
                    <TextInput
                        value={values.phone}
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        keyboardType="phone-pad"
                    />
                    {touched.phone && errors.phone && (
                        <Text>{errors.phone}</Text>
                    )}

                    <Text>Position Title</Text>
                    <TextInput
                        value={values.positionTitle}
                        onChangeText={handleChange("positionTitle")}
                        onBlur={handleBlur("positionTitle")}
                    />
                    {touched.positionTitle && errors.positionTitle && (
                        <Text>{errors.positionTitle}</Text>
                    )}

                    <Text>Department</Text>
                    <TextInput
                        value={values.department}
                        onChangeText={handleChange("department")}
                        onBlur={handleBlur("department")}
                    />
                    {touched.department && errors.department && (
                        <Text>{errors.department}</Text>
                    )}

                    <Text>Date of Hire</Text>
                    <TextInput
                        value={values.dateOfHire}
                        onChangeText={handleChange("dateOfHire")}
                        onBlur={handleBlur("dateOfHire")}
                        placeholder="YYYY-MM-DD"
                    />
                    {touched.dateOfHire && errors.dateOfHire && (
                        <Text>{errors.dateOfHire}</Text>
                    )}

                    <Pressable
                        disabled={isSubmitting}
                        onPress={() => resetForm()}
                    >
                        <Text>Clear Form</Text>
                    </Pressable>

                    <Pressable
                        disabled={!isValid || isSubmitting}
                        onPress={() => handleSubmit()}
                    >
                        {isSubmitting ? (
                            <View>
                                <ActivityIndicator />
                                <Text>Submitting...</Text>
                            </View>
                            
                        ) : (
                            <Text>Submit</Text>
                        )}
                    </Pressable>

                </View>
            )}
        </Formik>
    );
}

export default EmployeeForm;
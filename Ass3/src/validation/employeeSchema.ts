import * as Yup from "yup";

export const employeeSchema = Yup.object({
    employeeId: Yup.string()
        .required("Employee ID is required")
        .matches(/^\d{6,9}$/, "Employee ID must contain only numbers with or without the three leading zeroes"),

    fullName: Yup.string()
        .required("Full Name is required")
        .min(20, "Minimum of 20 characters")
        .max(50, "Maximum of 50 characters")
        .matches(/^[A-Za-z ]+$/, "Letters only"),

    address: Yup.string()
        .required("Address is required")
        .min(5, "Address is too short")
        .max(100, "Address is too long")
        .matches(/^[A-Za-z0-9\s]+$/, "Address can only contain letters, numbers, and spaces"),

    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),

    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),

    positionTitle: Yup.string()
        .required("Position Title is required")
        .min(10, "Minimum of 10 characters")
        .max(20, "Maximum of 20 characters")
        .matches(/^[A-Za-z ]+$/, "Letters only"),

    department: Yup.string()
        .required("Department is required")
        .min(2, "Minimum of 2 characters"),

    dateOfHire: Yup.date()
        .required("Date of Hire is required")
        .max(new Date(), "Date of Hire cannot be in the future")
        

        

})
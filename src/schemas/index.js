import * as Yup from "yup";

export const AddressSchema = Yup.object({
  Fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required First Name"),
  Lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Last Name"),
  Email: Yup.string().email("Invalid email").required("Required Email"),
  Address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Address"),
  State: Yup.string().required("Required State"),
  City: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required City"),
  Zip: Yup.number().required("Required Zip"),
});

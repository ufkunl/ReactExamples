import * as yub from "yup";

const validations = yub.object().shape({
    email: yub.string().email('Geçerli bir email girin.').required('Zorunlu Alan'),
    password: yub.string().min(5,'Min 5 karakter olmak zorunda.').required('Zorunlu Alan'),
    passwordConfirm: yub.string().oneOf([yub.ref('password')],'Password değerleri eşleşmiyor.').required('Zorunlu Alan')
});

export default validations;
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out.')
        .min(2, 'Name must be 2 characters long'),

    select: yup.string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),

    pepperoni: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),

})

export default formSchema
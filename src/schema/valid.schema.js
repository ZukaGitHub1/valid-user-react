import * as yup from 'yup';

const passwordRules =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
export let Regschema= yup.object().shape({
      username : yup.string().required().min(4).max(15, 'Must be 15 characters or less'),
      email:yup.string().email().required('Must be example@gmail.com'),
      age:yup.number().positive().min(18, 'above 18+'),
      password:yup
      .string()
      .required('Please Enter your password')
      .min(4)
      .matches(
       passwordRules,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      
      
})

export let Logshcema= yup.object().shape({
    email:yup.string().email().required('Please Enter your email'),
    password:yup
    .string()
    .required('Please Enter your password')
    .min(4)
    
    .matches(
     passwordRules,
      "password is not correct"
    ),
})


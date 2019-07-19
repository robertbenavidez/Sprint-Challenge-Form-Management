import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

function RegForm({ errors, touched, values }){
    return (
       <div>
           <Form>
               <div>
               {touched.username && <p>{errors.username}</p>}
                   <Field
                    type='text'
                    name='username'
                    placeholder='username'
                   />
               </div>
               <div>
               {touched.password && <p>{errors.password}</p>}
                   <Field
                    type='text'
                    name='password'
                    placeholder='password'
                   />
               </div>
               <button>Submit</button>
           </Form>
       </div>       
      );
    }
    
    export default withFormik({
        mapPropsToValues: (username, password) => {
          return {
            username: username || "",
            password: password || ""
          };
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
              .max(15)
              .required(),
            password: Yup.string()
              .min(7, 'Password must be 7 or more characters.')
              .required(),
          }),
        
          
          
      
        handleSubmit(values, formikBag) {
          console.log(values, formikBag)
          axios
            .post("http://localhost:5000", values)
            .then(res => {
              console.log("response data", res.data); 
              let data = res.data
              console.log(data)
              
            
            })
            .catch(err => {
              console.log("error", err); 
            });
            
        }

    }
    )(RegForm)
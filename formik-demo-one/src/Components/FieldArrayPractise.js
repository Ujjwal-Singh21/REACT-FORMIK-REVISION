import { FieldArray, Field } from 'formik'

<div className='form-control'>
    <label> List of Phone Numbers </label>
    <FieldArray name={phNumbers}>
        {
            (fieldArrayProps) => {
                const { push, remove, form} = fieldArrayProps
                const { values } = form
                const { phNumbers } = values
                return <div>
                    {
                        phNumbers.map((phNumber, index) => (
                            <div>
                                <Field name={`phNumbers[${index}]`} />
                                {
                                    index > 0 &&
                                    <button type='button' onClick={() => remove(index)}> - </button>
                                }
                               
                                <button type='button' onClick={() => push('')}> + </button>
                            </div>
                        ))
                    }
                </div>
            }
        }
    </FieldArray>

</div>


// import { Field, FieldArray } from "formik";


// <div className='form-control'>
//     <label> List of Phone Numbers </label>
//     <FieldArray name='phNumbers'>
//         {
//             (fieldArrayProps) => {
//                 console.log(fieldArrayProps)
//                 const { push, remove, form } = fieldArrayProps
//                 const { values } = form
//                 const { phNumbers } = values
//                 return <div> 
//                     {
//                        phNumbers.map((phNumber, index) => (
//                          <div key={index}>
//                           <Field name={`phNumbers[${index}]`} />
//                           {
//                               index > 0 && 
//                               <button type='button' onClick={() => remove(index)}> - </button>
//                           }
                         
//                           <button type='button' onClick={() => push('')}> + </button>
//                          </div>
//                        ))
//                     } 
//                     </div>
//             }
//         }
//     </FieldArray>
// </div>
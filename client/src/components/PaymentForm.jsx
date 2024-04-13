// import React, { useState } from 'react'
// import {CardElement,useElements,useStripe} from "@stripe/react-stripe-js"
// import axios from 'axios'


// // const CARD_OPTIONS = {
// //     iconStyle: "solid",
// //     style: {
// //         base: {
// //             iconColor: "#c4f0ff",
// //             color:"#000",
// //             fontWeight:500,
// //             fontFamily: "Roboto ,Open Sans,sans-serif",
// //             fontSize:"16px",
// //             fontSmoothing:"antialiased",
// //             ":-webkit-autofill": {color:"#fce883"},
// //             "::placeholder": {color:"#87bbfd"}
// //         },
// //         invalid: {
// //             iconColor:"#ffc7ee",
// //             color: "#000",
// //         }
// //     }
// // }

// const PaymentForm = () => {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()


//     const handleSubmit = async(e) => {
//         e.preventDefault()

//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })
//         if(!error){
//             try {
//                 const {id} = paymentMethod
//                 const response = await axios.post("http://localhost:5000/payment", {
//                     amount: 1000,
//                     id
//                 })
    
//                 if(response.data.success){
//                     console.log("Successfull payment")
//                     setSuccess(true)
//                 }
//             } catch (error) {
//                 console.log("Error:", error)
//             }
//         }else{
//             console.log(error.message)
//         }
//     }

    



//   return (
//     <>
//   {!success ? 
//   (
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//           <fieldset className='FormGroup'>
//               <div className="mb-4">
//                   <CardElement className="p-2 border border-gray-300 rounded" />
//               </div>
//           </fieldset>
//           <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay</button>
//       </form>
//   ) : (
//       <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-center">You just bought a sweet spatula, congrats! This is the best decision of your life.</h2>
//       </div>
//   )}
// </>

//   )
// }

// export default PaymentForm
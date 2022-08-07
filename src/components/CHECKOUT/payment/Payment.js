


import React,{useState} from 'react';
import Checkoutproduct from '../checkout_product/Checkoutproduct';
import { useStateValue } from '../StateProvider';
import "./payment.css";
import TextField from '@mui/material/TextField';
import { Routes, Route, Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getBasketTotal } from '../reducer';
import * as yup from "yup";
import { useFormik } from "formik";



function Payment() {

    const [{basket},dispatch]=useStateValue();

// const checkoutrate = getBasketTotal(basket)
const [amount,setamount]=useState(getBasketTotal(basket))



// console.log(checkoutrate)
    const handleSubmit1 =async (e)=>{
        try{
        e.preventDefault();
        if(getBasketTotal(basket)<1){
        alert("please enter valid amount");
        }else{
        // alert("please enter valid amount");

    
            var options = {
                key: "rzp_test_QnLDWaA7vOt7FJ",
                key_secret:"sD2Opg2yi6kajAPr52o2Zk9W",
                amount: getBasketTotal(basket)*100,
                currency:"INR",
                name:"Amazon_clone",
                description:"for testing purpose",
                handler: function(response){
                  alert(response.razorpay_payment_id);
                },
            prefill: {
              name:"Mohan10",
              email:"mohan32rc@gmail.com",
              contact:"790489543"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }

          };
          const pay = new window.Razorpay(options);
        //   const pay = new window.Razorpay(        alert("please enter valid amountjj"));
          pay.open();
        }
    }catch{
        console.log("error da",Error)
    }
      }


      const formvalidationSchema = yup.object({
        name: yup.string().required("UserName is required ⚠️"),
    
        Address: yup.string().required("Address is required ⚠️"),
        Mobile: yup.number().required("Mobile number is required ⚠️"),
      });
    
      const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
        useFormik({
          initialValues: {
            name: "",
            Address: "",
            Mobile: "",
          },
          validationSchema: formvalidationSchema,
          onSubmit: (values) => {
           
            
          },
        });


  return (
    <div className='payment'>
      <div className='payment_container'>

        <h1>
        
            Checkout <Link to="/checkout">({basket.length} </Link>item)
        </h1>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>
                    Delivery Address:
                </h3>
            </div>
            <div className='payment_address'>
                <form>

               <h5> 
                <span className='make'>
                 <TextField id="standard-basic"  
          name="name"
          value={values.name}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ``}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Name" 
          variant="standard"  />
           </span>
           </h5>
                <h5> <span className='make'><TextField id="standard-basic"
          name="Address"
          value={values.Address}
          error={errors.Address && touched.Address}
          helperText={errors.Address && touched.Address ? errors.Address : ``}
          onChange={handleChange}
          onBlur={handleBlur}label="Address" variant="standard" /></span></h5> 
                <h5> <span className='make'> <TextField id="standard-basic"  name="Mobile"
          value={values.Mobile}
          error={errors.address && touched.Mobile}
          helperText={errors.Mobile && touched.Mobile ? errors.Mobile : ``}
          onChange={handleChange}
          onBlur={handleBlur}
          label=" Mobile" variant="standard" /></span></h5>
                
                </form>
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>
                    Review items and Delivery
                </h3>
            </div>
                <div className='payment_items'>
                  {basket== 0?<div className='noitem'><h1>No item in cart</h1></div>:
                basket.map(item => (<Checkoutproduct id={item.id} img={item.image} title={item.title} price={item.price} rating={item.rating} />))
  }
                </div>
        </div>
        <div className='payment_sections '>
           
            <div className='payment_details'>
            {/* <CurrencyFormat renderText={(value)=>( */}
        <>
        <p className='p'>
           Total Order  ({basket.length} items):
            <div>
             RS:
            <strong>{getBasketTotal(basket)}</strong>/-
            </div>
        </p>
        
    </>

      {/* ) */}

      {/* } */}
      {/* decimalScale={2}
      value={getBasketTotal(basket)}
      // value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"RS: "} */}
      {/* /> */}
            
            <Fab variant="extended" onClick={handleSubmit1}><CheckCircleIcon sx={{ mr: 1 }}/>BUY NOW</Fab>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment







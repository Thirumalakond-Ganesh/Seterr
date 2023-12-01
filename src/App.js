import React from "react";
import {useForm,setError} from "react-hook-form";

function App(){
  const{
    register,
    handleSubmit,
    setError,
    formState:{errors},
  }=useForm();
   const onSubmit=async(data)=>{
    const isUsernameValid=await validateUsername(data.username)

    if(!isUsernameValid){
      setError('username',{
        type:'manual',
        message:'This Username is Not Available',
      });
    }
    else{
      console.log('form data submitted',data)
    }
   };
   
   const validateUsername = async (username) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isAvailable = username !== 'takenUsername';
        resolve(isAvailable);
      }, 1000);
    });
  };
return(
  
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>
      UserName:
      <input {...register('username',{required:true})}/>
      {errors.username&&<p>{errors.username.message}</p>}
    </label>
    <button type="submit">
      Submit
    </button>
    </form>
  
);
}

export default App
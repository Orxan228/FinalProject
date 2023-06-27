import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
const Mobile = () => {
  const[loading,setLoading]=useState(false)
useEffect(()=>{

  setLoading(true)
  window.scrollTo({top:0})
  setTimeout(()=>{
    setLoading(false)
  },1500)

},[])



  return (
    <>
      {
      loading ?
      <Loader/>:
      <section>



mobile








        
      </section>

    }
    </>
  )
}

export default Mobile

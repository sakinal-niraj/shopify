import {toast} from 'react-toastify'

export const handleSuccess = (msg:string)=>{
    toast.success(msg,{
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable:true,
    })
}

export const handleError = (msg:string)=>{
    toast.error(msg,{
        position:"bottom-right",
        autoClose:3000,
        closeOnClick:true,
        draggable:true,
    })
}
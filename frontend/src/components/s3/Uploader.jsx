import React, { useState } from 'react'
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import axios from 'axios'
import toast, {Toaster} from "react-hot-toast";
import './Uploader.css'

const Uploader = () => { 

  const [isLinkPresent, setIsLinkPresent] = useState(true);

  const [data, setData]=useState({
    name: "",
    category: "",
    author: "",
    edition: "",
    description: "desc",
    link:"",
    coverpage: ""
  })

  const upload = (file) => {
    var file = file.target.files[0];
    const refresh = toast.loading("Uploading book...");
    const creds = {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY 
    }

    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({ region: "ap-south-1", credentials: creds }),
        params: { Bucket: "direct-upload-from-frontend", Key: file.name, Body: file },
        leavePartsOnError: false,
      });
      
      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });
      
      parallelUploads3.done();

      toast.success("Book added to bucket! click on upload!", {
        id: refresh,
      });
      
    } catch (e) {
      console.log(e);
      toast.error(e, {
        id: refresh,
      });
    }

    const newData={...data}
    newData["link"]=file.name
    setData(newData)
    // console.log(newData)
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
  }

  const formSubmitHandler= async (e)=>{
    e.preventDefault();
    const refresh = toast.loading("Uploading book...");
    if(data["link"]===""){
      setIsLinkPresent(false);
    }
    else{
      setIsLinkPresent(true);
      data["coverpage"]  = data["coverpage"]!==""? data["coverpage"] : `${process.env.REACT_APP_DEFAULT_COVERPAGE}` ;
      data["author"]  = data["author"]!==""? data["author"] : "unknown";
      data["category"]  = data["category"]!==""? data["category"] : "unknown";
      data["edition"]  = data["edition"]!==""? data["edition"] : "unknown";
      try {
        // await axios.post(`${process.env.REACT_APP_BACKEND_URL}/book/new`, data).then(res=>console.log(res.data))
        console.log("request started...")
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_BACKEND_URL}/book/new`,
          data: data,
          headers: { "Content-Type": "application/json" },
        })
          .then(function (response) {
            //handle success
            console.log("res:",response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
          toast.success("Book uploaded successfully!", {
            id: refresh,
          });
      } catch (error) {
        console.log(error);
        toast.error(error, {
          id: refresh,
        });
      }
    }
    
  }

  return (
    <div className='div1'>
      {!isLinkPresent && <p>Upload the book first</p>}
      <form onSubmit={e=>formSubmitHandler(e)}>
        <input onChange={e=>handle(e)} id='name' value={data.name} placeholder='book name' type="text" required/>
        <input onChange={e=>handle(e)} id='category' value={data.category} placeholder='book category' type="text" />
        <input onChange={e=>handle(e)} id='author' value={data.author} placeholder='book author' type="text" />
        <input onChange={e=>handle(e)} id='edition' value={data.edition} placeholder='book edition' type="text" />
        <input onChange={e=>handle(e)} id='description' value={data.description} placeholder='book description' type="text" />
        <input onChange={e=>handle(e)} id='coverpage' value={data.coverpage} placeholder='book coverpage link' type="text"/>
        <input type="file" onChange={upload} />
        <button className='primary-button'>Upload</button>
        <Toaster/>
      </form>
    </div>
  )
}

export default Uploader
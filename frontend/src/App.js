import React, {Component,useState,useEffect} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import axios from 'axios'
import Navbar from './navbar'

export default function App () {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [Loading, setloading] = useState(false);
  let label = 'none'
  let confidence = 0
  let loading = null

  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL,
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
      }
      setloading(false);
    }
  }

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);


  useEffect(() => {
    if (!preview) {
      return;
    }
    setloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

    if (data && Loading == false){
     label = (data.class)
     confidence = (data.confidence)
    }

    if (Loading){
      loading = "Calculating..."
    }

    return (
    <div>
      <Navbar />
      <br></br>
      <DropzoneArea
      acceptedFiles={['image/*']}
      dropzoneText={"Upload an image of an X-ray"}
      onChange={onSelectFile}
      showPreviewsInDropzone = {true}
      showFileNames = {true}

/>
    <div class ='instruction'><h4>Get started by uploading an image of an X-ray. The AI will calculate the results and display it below -</h4></div>
        <div class="circle">
            <p class = 'circleCalculating'> {loading} </p>
            <p class = 'circleLabel'> Label :  {label} </p>
            <p class = 'circleConfidence'> Confidence : {confidence} % </p>
        </div>
    </div>
    )
};


import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DropZone({handleFile}) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log(e.target.result)
      handleFile(e.target.result);
    };

    reader.readAsDataURL(acceptedFiles[0]);
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} style={{width: '25vw', height: '200px', border: 'solid black 2px', display: 'flex'}}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default DropZone;
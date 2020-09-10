import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DropZone({handleFile}) {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onload = (e) => {
      handleFile(e.target.result);
    };

    reader.readAsDataURL(acceptedFiles[0]);
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div id='dropZone' {...getRootProps()} >
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>&#x2795;</p>
      }
    </div>
  )
}

export default DropZone;
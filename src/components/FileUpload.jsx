import React, { useRef, useState } from 'react'


const FileUpload = () => {

  const [file, setFile] = useState();
  const [fileInfo, setFileInfo] = useState({ name: "", type: "", size: "", url: "" })
  const fileRef = useRef();
  const [progress, setProgress] = useState(0)
  const [startUpload, setStartUpload] = useState(false)
  console.log(navigator.pdfViewerEnabled)
  const renderPreview = () => {
    if (fileInfo.type.startsWith("image/")) {
      return <img src={fileInfo.url} alt="Preview" width="200" />;
    } else if (fileInfo.type === "application/pdf") {
      return (
        <>
          <a href={fileInfo.url} download={true} >download</a>
          <embed src={fileInfo.url} height={'300px'} width={'300px'} />
        </>
      );
    } else {
      return <p>Preview not available for this file type.</p>;
    }
  };
  const handleSubmit = () => {
    setStartUpload(true)
  }
  const handleChange = (e) => {
    const { name, type, size } = e.target.files[0]
    const url = URL.createObjectURL(e.target.files[0]);
    // console.log(e.target.files) both same
    // console.log(fileRef.current.files)
    setFileInfo({ name, type, size, url })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileRef} name="file" id="file" onChange={handleChange} />
        {fileInfo.name && (<div>
          <li>{fileInfo.name}</li>
          <li>{fileInfo.type}</li>
          <li>{fileInfo.size} bytes</li>
          {renderPreview()}
        </div>
        )}
        {startUpload && <progress min='0' max='100' value={progress}></progress>}
        <button disabled={startUpload} type="submit">{startUpload ? 'uploading...' : 'upload'}</button>
      </form>
    </>
  )
}

export default FileUpload;

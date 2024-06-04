import React from 'react'

const VideoFileUpload = () => {
  return (
   <form>
    <input type="text" name="title" id="title" />
    <br />
    <input type="file" name="thumbnail" id="thumbnail" />
    <br />
    <input type="file" name="video" id="video" />
   </form>
  )
}

export default VideoFileUpload;

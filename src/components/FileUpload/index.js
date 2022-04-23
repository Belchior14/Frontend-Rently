import axios from 'axios'

export function FileUpload({setImage}) {
  const uploadImage = async (image) => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}/upload`, image)
      .then(res => res.data)
      .catch((err) => console.log(err))
  }

  const handleFileUpload = async (e) => {
    const file = new FormData()
    file.append("myFile", e.target.files[0])
    
    uploadImage(file)
      .then(response => setImage(response.path))
      .catch(err => console.log("Error while uploading the file: ", err))
  }

  return <input 
    type="file" 
    name="myFile" 
    onChange={handleFileUpload} 
    />
}
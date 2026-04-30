import axiosInstance from "./axioInstance"

const uploadImage = async(imageFile) => {
    const formData = new FormData()

    formData.append("Image", imageFile)

    try {

            console.log("Uploading image...");

       const response = await axiosInstance.post("/auth/uploadImage", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
         }
       }) 

       return response.data
    } catch (error) {
       console.log("Error uploading image: ${error.message}") 
       throw error
    }
}

export default uploadImage
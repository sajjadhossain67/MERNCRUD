// import React, { useState } from 'react';
// import axios from 'axios';

// function PhotoUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('photo', selectedFile);

//       try {
//         const response = await axios.post('/api/upload', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });

//         console.log(response.data.message);
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Photo</button>
//     </div>
//   );
// }

// export default PhotoUpload;

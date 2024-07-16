import './PictureOfTheDay.css'
import { useState, useEffect } from "react";

export default function PictureOfTheDay() {
   const [pictureData, setPictureData] = useState(null);

   useEffect(() => {
      fetchPicture();

      async function fetchPicture() {
         const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=z2yv1z4qkLlqevZsY40ZoZmpuJLqWr1ad5NcwBe4`);
         const data = await response.json();
         setPictureData(data);
      }
   }, []);

   //TODO add better error handling
   if (!pictureData) {
      return <div />
   }

   return (
       <div className="nasa-picture">
         {pictureData.media_type === "image" ? (
            <img src={pictureData.url} alt={pictureData.title} className="picture"/>
         ) : (
            <iframe
            title="space-video"
            src={pictureData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
            />
         )}

         <div>
            <h1>{pictureData.title}</h1>
            <p className="date">Date: {pictureData.date}</p>
            <p className="explanation">{pictureData.explanation}</p>
         </div>
       </div>
   );
}
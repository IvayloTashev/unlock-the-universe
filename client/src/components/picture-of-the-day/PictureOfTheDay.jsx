import { useGetNasaPicture } from '../../hooks/useSpace';
import './PictureOfTheDay.css'

export default function PictureOfTheDay() {
   const [nasaPicture] = useGetNasaPicture()

   //TODO add better error handling
   if (!nasaPicture) {
      return <div />
   }

   return (
      <div className="nasa-picture">
         {nasaPicture.media_type === "image" ? (
            <img src={nasaPicture.url} alt={nasaPicture.title} className="picture" />
         ) : (
            <iframe
               title="space-video"
               src={nasaPicture.url}
               frameBorder="0"
               gesture="media"
               allow="encrypted-media"
               allowFullScreen
               className="photo"
            />
         )}

         <div>
            <h1>{nasaPicture.title}</h1>
            <p className="date">Date: {nasaPicture.date}</p>
            <p className="explanation">{nasaPicture.explanation}</p>
         </div>
      </div>
   );
}
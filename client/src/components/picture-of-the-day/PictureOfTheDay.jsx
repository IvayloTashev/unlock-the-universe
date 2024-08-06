import { useGetNasaPicture } from '../../hooks/useSpace';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import './PictureOfTheDay.css'

export default function PictureOfTheDay() {
   const [nasaPicture, isPending] = useGetNasaPicture();

   return (
      <>
         {
            isPending ? (
               <div className='loading' >
                  <LoadingSpinner />
               </div>
            ) : nasaPicture.media_type === "image" ? (

               <div className="nasa-picture">
                  <img src={nasaPicture.url} alt={nasaPicture.title} className="picture" />
                  <div>
                     <h1>{nasaPicture.title}</h1>
                     <p className="date">Date: {nasaPicture.date}</p>
                     <p className="explanation">{nasaPicture.explanation}</p>
                  </div>
               </div>

            ) : (
               <div className="nasa-picture">
                  <iframe
                     title="space-video"
                     src={nasaPicture.url}
                     frameBorder="0"
                     gesture="media"
                     allow="encrypted-media"
                     allowFullScreen
                     className="video"
                  />
                  <div>
                     <h1>{nasaPicture.title}</h1>
                     <p className="date">Date: {nasaPicture.date}</p>
                     <p className="explanation">{nasaPicture.explanation}</p>
                  </div>
               </div>
            )
         }
      </>
   );
}

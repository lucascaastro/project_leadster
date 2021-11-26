import './styles.scss';

import { PhotoCard } from '../PhotoCard';

export const Photos = ({ data }) => (
  <div className="photos">
    {
      !!data.length && data.map(photo => {
        const id = (Math.random() * 1000);
        return (
          <PhotoCard
            key={id}
            cover={photo.src.original}
          />
        )
      })
    }
  </div>
);
import './styles.scss'

export const PhotoCard = ({ title, cover, id }) => (
  <div
    className="photo"
    style={{ backgroundImage: `url(${cover})` }}>
  </div>
);
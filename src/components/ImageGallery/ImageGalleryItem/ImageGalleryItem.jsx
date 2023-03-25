import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) {
  return (
    <li className={css.ImageGalleryItem} onClick={() => onClick(largeImageURL)}>
      <img className={css.ImageGalleryItemImage} src={webformatURL} alt={id} />
    </li>
  );
}

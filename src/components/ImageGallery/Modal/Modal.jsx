import css from '../Modal/Modal.module.css';

export default function Modal({ largeImageURL, onClick }) {
  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

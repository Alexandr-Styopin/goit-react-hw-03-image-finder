import css from '../Button/Button.module.css';
export default function Button({ onClick }) {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

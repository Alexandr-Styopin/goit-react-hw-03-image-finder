import { Component } from 'react';
import axios from 'axios';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from '../ImageGallery/ImageGallery.module.css';

const API_KEY = '22160943-514fc90dc5a1a6996be2229bd';

export default class ImageGallery extends Component {
  state = {
    images: [],
    pageValue: 1,
    loader: false,
    dataModal: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.formValue !== this.props.formValue) {
      this.setState({ images: [] });
    }
    setTimeout(() => {}, 5000);
    if (
      prevProps.formValue !== this.props.formValue ||
      prevState.pageValue !== this.state.pageValue
    ) {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${this.props.formValue}&page=${this.state.pageValue}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        this.setState({ loader: false });
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowd);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowd);
  }

  handleClickLoadMore = () => {
    this.setState(prevState => ({ pageValue: prevState.pageValue + 1 }));
  };
  handleClickImageItem = largeImageURL => {
    this.setState({ dataModal: largeImageURL });
  };

  toggleModal = e => {
    this.setState({ dataModal: '' });
  };

  handleKeyDowd = e => {
    if (e.code === 'Escape') {
      this.setState({ dataModal: '' });
    }
  };

  render() {
    const { images, loader, dataModal } = this.state;

    return (
      <div className={css.ImageGalleryWrapper}>
        {dataModal !== '' && (
          <Modal largeImageURL={dataModal} onClick={this.toggleModal} />
        )}

        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={this.handleClickImageItem}
            />
          ))}
        </ul>
        {loader && <Loader />}
        {images.length > 0 && <Button onClick={this.handleClickLoadMore} />}
      </div>
    );
  }
}

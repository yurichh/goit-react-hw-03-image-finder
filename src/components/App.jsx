import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { Component } from 'react';
import axios from 'axios';
class App extends Component {
  //  API_KEY = 39910711-abcee3e7f1b375d2c0a92cc23

  state = {
    isLoadMore: false,
    isLoading: true,
    isShowModal: false,
    query: '',
    page: 1,
    images: [],
  };
  handleSubmit = (e, query) => {
    e.preventDefault();
    this.setState({ query: query });
  };
  pageIncrement = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      if (query !== prevState.query) {
        this.setState(prevState => ({
          images: [],
        }));
      }
      axios(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=39910711-abcee3e7f1b375d2c0a92cc23&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(({ data }) => {
          console.log(data);
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoadMore: true,
          }));
        })
        .catch(err => console.log(err.message));
    }
  }
  render() {
    // eslint-disable-next-line
    const { isLoadMore, isLoading, isShowModal, query, page, images } =
      this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ul className="gallery-list">
          {images.map(image => (
            <ImageGallery image={image} />
          ))}
        </ul>
        {isLoadMore && <Button pageIncrement={this.pageIncrement} />}
        {isLoading && <Loader />}
        <Modal />
      </>
    );
  }
}
export default App;

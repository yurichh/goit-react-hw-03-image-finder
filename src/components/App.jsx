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
    isShowModal: false,
    query: '',
    page: 1,
    images: [],
  };
  handleSubmit = (e, query) => {
    e.preventDefault();
    this.setState({ query: query });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      axios(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=39910711-abcee3e7f1b375d2c0a92cc23&image_type=photo&orientation=horizontal&per_page=12`
      ).then(({ data }) => {
        console.log(data);
        // const {}
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      });
    }
  }
  render() {
    const { isShowModal, query, page, images } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {images.map(image => (
          <ImageGallery image={image} />
        ))}
        <Button />
        {isShowModal && <Loader />}
        <Modal />
      </>
    );
  }
}
export default App;

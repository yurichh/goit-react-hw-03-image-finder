import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { Component } from 'react';
import { serviceImages } from 'services/api';
class App extends Component {
  //  API_KEY = 39910711-abcee3e7f1b375d2c0a92cc23

  state = {
    loadMore: false,
    loading: false,
    showModal: false,
    query: '',
    page: 1,
    images: [],
    currentImage: {},
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.getImages(query, page);
    }
  }
  getCurrentImage = (img, text) => {
    this.setState({
      currentImage: { image: img, text: text },
      showModal: true,
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleSubmit = query => {
    this.setState({ query: query, page: 1, images: [] });
  };
  pageIncrement = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  getImages = async (q, p) => {
    try {
      this.setState({ loading: true, loadMore: false });
      const { data } = await serviceImages(q, p);
      // console.log(q, p);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: this.state.page < Math.ceil(data.totalHits / 12),
      }));
    } catch (err) {
      console.log(err.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loadMore, loading, showModal, images, currentImage } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery images={images} getCurrentImage={this.getCurrentImage} />
        {/* {images.length === 0 && (
          <h1 style={{ textAlign: 'center', marginTop: 50 }}>No images here</h1>
        )} */}
        {loadMore && <Button pageIncrement={this.pageIncrement} />}
        {loading && <Loader />}
        {showModal && (
          <Modal toggleModal={this.toggleModal} currentImage={currentImage} />
        )}
      </>
    );
  }
}
export default App;

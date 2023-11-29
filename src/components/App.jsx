import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { Component } from 'react';
class App extends Component {
  /* API_KEY: 39910711-abcee3e7f1b375d2c0a92cc23 */

  state = {
    isShowModal: false,
  };
  handleSearch = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form">
            <button
              type="submit"
              className="button"
              onClick={this.handleSearch}
            >
              X
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}
export default App;

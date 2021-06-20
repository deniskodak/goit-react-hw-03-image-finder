import React, { Component } from "react";

import ApiService from "./components/ApiService";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";
import ContainerWithLoader from "./components/Loader";
import Modal from "./components/Modal";

import { GlobalStyles, Section } from "./styled";

class App extends Component {
  state = {
    imagesData: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    isModal: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  getImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    try {
      const { hits } = await ApiService(searchQuery, page);
      this.setState(({ imagesData, page }) => ({
        imagesData: [...imagesData, ...hits],
        page: page + 1,
      }));
    } catch (error) {
      console.dir(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (keyword) => {
    this.setState({
      searchQuery: keyword,
      page: 1,
      imagesData: [],
      error: null,
    });
  };

  onClick = () => {
    this.getImages();
  };

  toggleModal = () => {
    this.setState(({ isModal }) => ({ isModal: !isModal }));
  };

  onClickImg = (e) => {
    console.log(e.target);
  };
  render() {
    const { imagesData, loading, error, isModal } = this.state;
    const shouldRenderLoadMoreBtn = imagesData.length > 0 && !loading;

    return (
      <>
        <GlobalStyles />
        {isModal && <Modal onClose={this.toggleModal} />}
        <Section>
          <Searchbar onSubmit={this.handleSubmit} />
          {error && <h2>{error}</h2>}
          <ImageGallery images={imagesData} onClick={this.onClickImg} />
          {loading && <ContainerWithLoader />}
          {shouldRenderLoadMoreBtn && (
            <ButtonLoadMore onIncrement={this.onClick} />
          )}
        </Section>
      </>
    );
  }
}
export default App;

import React from 'react';
import LazyLoad from 'vanilla-lazyload';

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });
}

export default class LazyImage extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const {alt, src} = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
      />
    );
  }
}

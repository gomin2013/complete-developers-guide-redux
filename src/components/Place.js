import React, {Component} from 'react'
import PropTypes from 'prop-types'
import isUrlValid from 'url-validation'
import LazyImage from '../plugins/lazy-image.js'


import '../stylesheets/place.scss'

export default class Place extends Component {
  render() {
    const {name, location, imgUrl} = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <dl>
          <dt>Location : </dt>
          <dd>{location}</dd>
        </dl>
        <div className="img">
          <LazyImage src={imgUrl} alt={name + '(' + location + ')'}/>
        </div>
      </li>
    );
  }
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgUrl: function (props, propName) {
    if (!isUrlValid(props[propName]))
      return new Error(propName + ': must be a url.');
  }
};

Place.defaultProps = {
  imgUrl: 'https://dummyimage.com/175/eeeeee/cccccc.gif'
};

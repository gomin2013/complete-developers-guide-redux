import React, {Component} from 'react'
import Place from "./Place";
import Places from "../places";

export default class App extends Component {
  render() {
    return (
      <div id="place">
        <h1>Seven Wonders of the World</h1>
        <ul className="list">{
          Places.map((place, i) => {
            const {name, location, imgUrl} = place;

            return (
              <Place
                key={i}
                name={name}
                location={location}
                imgUrl={imgUrl}/>
            );
          })
        }</ul>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {cardTitle,description,imageUrl}=this.props;
    return (
      <div>
        <div className="card " style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

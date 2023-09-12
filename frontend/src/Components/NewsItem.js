import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, author, newsSource } = props; 

    // Create a Date object from the timestamp
    const postedDate = new Date(date);

    // Extract the date in the "YYYY-MM-DD" format
    const formattedDate = postedDate.toISOString().split('T')[0];


    return (
      <>
        <div className="my-3">
          <div className="card">
            <div className="card-header text-center" style={{ backgroundColor:  'lightsalmon'}}>
              News source: <strong>{newsSource}</strong>
            </div>
            <img src={!imageUrl ? "https://hot-town-images.s3.amazonaws.com/kwtv/production/2022/January/19/breaking-news.1642620193378.jpeg" : imageUrl} className="card-img-top" alt="error" />
            <div className="card-body" style={{ backgroundColor:  'lightgray'}}>
              <h5 className="card-title">{title}  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
                <span className="visually-hidden">unread messages</span>
              </span></h5>
              <p className="card-text">{description}</p>
              <h4 className="card-text"><small className="">Author: {author}</small></h4>
              <p className="card-text"><small className="text-muted">Uploaded on {formattedDate}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-success btn-sm">Read More</a>
              <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '15px' , color: 'white', fontSize: '20px' , marginTop:'5px' , cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </>
    )
}

export default NewsItem;
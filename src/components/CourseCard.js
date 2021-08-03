import React from 'react'
import "./CourseCard.css"
import { useHistory } from 'react-router';
const CourseCard = ({ id, title, price, thumbnailURL, videoLink }) => {
  const history = useHistory();

  const paid = localStorage.getItem(id);
  return (
    <div className="maindata">
      <div class="product-details">
        <h1>{title}</h1>

        <div class="control">
          <button
            class="btn"
            onClick={() => {
              history.push(paid ? `/course/${videoLink}` : `/payment/${id}`);
            }}
          >
            <span class="price">${price}</span>
            <span class="shopping-cart">
              <i
                class={paid ? "fa fa-book" : "fa fa-shopping-cart"}
                aria-hidden="true"
              ></i>
            </span>
            <span class="buy">{paid ? "start" : "Get now"}</span>
          </button>
        </div>
      </div>

      <div class="product-image">
        <img src={thumbnailURL} alt="" />
      </div>
    </div>
  );
};

export default CourseCard

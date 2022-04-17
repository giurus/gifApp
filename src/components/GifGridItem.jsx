import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="col">
      <div className="card animate__animated animate__fadeIn">
        <img src={url} alt={title} height="170px" />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;

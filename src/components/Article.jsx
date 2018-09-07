import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <div>
      {props.title}
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  photoPath: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.array
};

export default Article;

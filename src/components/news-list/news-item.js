import React from 'react';
import moment from 'moment';

const NewsItem = ({
  title,
  description,
  date,
}) => {
  return (
    <div className="news-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Дата создания: {moment(date).format('L')}</p>
    </div>
  );
};

export default NewsItem;

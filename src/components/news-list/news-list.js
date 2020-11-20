import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { newsListRequest, newsListSuccess } from '../../actions';
import { loadNewsRequest } from '../../utils';
import Loader from '../shared/loader/loader';
import NewsItem from './news-item';

const NewsList = ({
  newsList,
  newsListRequest,
  newsListSuccess,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (!newsList || !newsList.length) {
      newsListRequest();
      loadNewsRequest().then((res) => {
        newsListSuccess(res)
      })
    }
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="news-list">
      <input
        className="news-list__search text-input"
        placeholder="Поиск новостей"
        value={searchValue}
        onChange={handleSearch}
      />
      {newsList
        .filter(
          ({ title, description }) =>
            description.toLowerCase().includes(searchValue.toLowerCase())
            || title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map(({ title, description, date, approved, id }) => (
          <NewsItem
            key={id}
            title={title}
            description={description}
            date={date}
            approved={approved}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  newsList: state.news,
  isLoading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  newsListRequest: () => dispatch(newsListRequest()),
  newsListSuccess: (data) => dispatch(newsListSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

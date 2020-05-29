import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async search => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: search,
          location: 'Edinburg, TX'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong.');
    }
  };

  return [searchApi, results, errorMessage];
};

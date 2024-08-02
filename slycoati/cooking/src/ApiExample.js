import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ApiExample = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/meal');
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>API Data Display</h2>
      {apiData ? (
        // Render your component using the fetched data
        <MyComponent data={apiData} />
      ) : (
        // Render a loading state or placeholder
        <p>Loading...</p>
      )}
    </div>
  );
};

const MyComponent = ({ data }) => {
  return (
    <div>
      <h1>API Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.idCategory}>{item.strCategory}</li>
          ))}
        </ul>
    </div>
  );
};
export default ApiExample;
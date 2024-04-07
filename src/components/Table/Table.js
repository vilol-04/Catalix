
import { useState, useEffect } from 'react';
import Data from '../../data.csv';
import Papa from 'papaparse';
import './Table.css';

function Table() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, { 
        header: true, 
        skipEmptyLines: true 
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div className="table-main">

      {data.length ? (
        <table className="table">
          <thead>
            <tr>
            <th>Page</th>
             <th>Pageviews</th>
             <th>Unique Pageviews</th>
             <th>Avg. Time on Page</th>
             <th>Entrances</th>
             <th>% Exit</th>
             <th>Page Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                  <td>{item.page}</td>
                  <td>{item.pageviews}</td>
                  <td>{item.uniquepageviews}</td>
                  <td>{item.avgtimeonpage}</td>
                  <td>{item.extrances}</td>
                  <td>{item.exit}</td>
                  <td>{item.pagevalue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}


    </div>
  );
}

export default Table;
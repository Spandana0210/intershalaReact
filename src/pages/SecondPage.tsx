import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [data, setData] = useState<GridRowsProp>([]);
  const navigate = useNavigate();
  const userDetails = localStorage.getItem('userDetails');

  useEffect(() => {
    if (!userDetails) {
      navigate('/first'); // Redirect to the first page if details are missing
    } else {
      // Fetch data from the API only if user details are present
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data: Post[]) => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [userDetails, navigate]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'User ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div>
      <h2>Second Page</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
};

export default SecondPage;

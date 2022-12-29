import { Breadcrumb, Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const navigate = useNavigate()
    const [state, setState] = useState('');
    const [movie, setMovie] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchMovies = () => {
        fetch('http://localhost:4000/movies')
            .then((res) => res.json())
            .then((data) => { setState(data.items) });
        setLoading(false);
    }

    const getMovie = (e) => {
        setMovie(e.target.value);
    }


    useEffect(() => {
        fetchMovies();
        state && state.map((each, index) => { console.log(each.movieName); })
    }, [])

    const dataSource = state;
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Movie Name',
            dataIndex: 'movieName',
            key: 'movieName',
        },
        {
            title: 'Release Date',
            dataIndex: 'release_date',
            key: 'release_date',
          },
        {
            title: 'Hit',
            dataIndex: 'hit',
            key: 'hit',

            render: (text, record, index) => {
                if (typeof text === 'boolean') {
                  if (text === true) {
                    return 'Yes';
                  }
                  return 'No';
                } else {
                  if (text === 'on') {
                    return 'Yes';
                  }
                  return 'No';
                }
              },
        }
    ];
    console.log(state)
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0', float: "right" }}>
                <Breadcrumb.Item><Button onClick={() => navigate('/NewMovies')}>AddNew</Button></Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
export default Movies
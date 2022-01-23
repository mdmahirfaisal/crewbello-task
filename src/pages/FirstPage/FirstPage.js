import React from 'react';
import './FirstPage.css';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {


    const handleOnBlur = (e) => {
        const searchText = e.target.value;
        console.log(searchText);
    };

    const navigate = useNavigate();

    const handleData = (e) => {
        e.preventDefault()
        navigate('/details')

    }


    return (
        <div>
            <h1 className='fw-bold text-info my-5 py-3'>Welcome to Crewbello</h1>
            <div className="container">
                <Paper elevation={5} className='w-50 p-3 mx-auto'>
                    <form onSubmit={handleData} className="mt-2">
                        <TextField
                            className="w-100" type="text" required onChange={handleOnBlur} label="Search by chirag balani" variant="standard" />
                        <Button type="submit" variant="contained" className=" w-100  rounded-pill mt-3 send-button">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i><span className="send-text"><i className="fas fa-search me-1"></i>Search</span>
                            </div>
                        </Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
};

export default FirstPage;
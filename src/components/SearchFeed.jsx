import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import { useParams } from 'react-router-dom';
import {Videos} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
  const [videos,setVideos] = useState([]);
  const {searchTerm}=useParams();
  

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm]);

  
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{
        color:'white'
      }}>
        Search Results for<span style={{color:'linear-gradient(90deg, rgba(212,53,18,0.9864320728291317) 0%, rgba(238,215,26,1) 51%, rgba(255,184,0,1) 100%)',marginLeft:'10px'}}>{searchTerm}</span>Videos
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default Feed

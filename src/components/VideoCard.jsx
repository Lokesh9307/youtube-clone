
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import { demoThumbnailUrl,demoChannelTitle,demoVideoTitle,demoVideoUrl,demoChannelUrl } from '../utils/constants';


const VideoCard = ({video:{id:{videoId},snippet} }) => {
  
  return (
    <Card sx={{width:{ xs:'100%',md:'325px',sm:'290px'} ,boxShadow:'none',borderRadius:0}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{xs:'100%',sm:'290px',md:'325px'},height:180}}
        />
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
    
    <Link to={videoId ?`/video/${videoId}`: demoVideoUrl}>
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF" fontSize={20}>
        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
      </Typography>
    </Link>

    <Link to={snippet?.channelId ? `/channel1/${snippet?.channelId}`: demoChannelUrl}>
      <Typography variant="subtitle2" fontWeight="bold" color='gray' fontSize={15}>
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx={{fontSize:12,color:'blue',ml:'13px'}}/>
      </Typography>
    </Link>
    </CardContent>
    </Card>
  )
}

export default VideoCard

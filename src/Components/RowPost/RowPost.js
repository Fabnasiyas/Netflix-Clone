import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl ,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube'

const RowPost = (props) => {

  const [movies,setMovies]=useState([])

const [urlid,seturlid]=useState('')
  useEffect(()=>{
axios.get(props.url).then((response)=>{
  console.log(response.data);
  setMovies(response.data.results)
}).catch(err=>{
  // alert('Network Error');
})
  },[])
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
    },
  }
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])
      }
      else{
        console.log("Array empty");
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            
        <img onClick={()=>handleMovie(obj.id) } className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}

       </div>
       { urlid && <Youtube opts={opts} videoId={urlid.key}/>}
        </div>
  )
}
 
export default RowPost
import Axios from '../../Axios/Axios'
import { api_key,image_url} from '../../Constance/Constance'
import React, { useEffect, useState } from 'react'
import './Card.css'
import YouTube from 'react-youtube'


function Card(props) {
    const [movies,Setmovies] = useState([])
    const [key,setKey] = useState()
    useEffect(()=>{
        Axios.get(props.url).then((response) => {
            Setmovies(response.data.results)
            console.log(response.data.results);
        })
    }, [])

    const getId=(id)=>{
        console.log("movies id=",id)
        Axios.get(`movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
                        console.log("---------",response.data.results[0])
                        setKey(response.data.results[0].key)
                })
    }
    const opts = {
        height: '350',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
  return (
    <div>
          {
            key ? <YouTube  videoId={key} opts={opts}/>: ""
            }
    <div className='row'>
      
        <div className="post">
           {
            movies.map((obj)=>{
                return (
                    
                    <img className='movies' onClick={()=>getId(obj.id)} src={movies ? image_url+obj.backdrop_path:""} alt=""/>
                )
            })
           }
        </div>
      






            
       
    </div>
                           
   





    
    
    </div>

    
    
  )
}

export default Card
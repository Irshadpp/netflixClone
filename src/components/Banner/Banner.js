import Axios from '../../Axios/Axios'
import React, {useEffect,useState} from 'react'
import { api_key,image_url } from '../../Constance/Constance'
import './Banner.css'
import YouTube from 'react-youtube'

function Banner() {
        const [movies,Setmovies] = useState()
        const [key,setKey] = useState()

        useEffect(()=>{
                console.log('hellow')
                Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`).then((response)=>{
                        console.log(response.data.results)
                        

                         let i = 0;
                setInterval(()=>{
                        i++;
                        Setmovies(response.data.results[i])
                        if(i==20){
                               i=0; 
                        }
                },2000)
                })
        }, [])

        const getId = (id)=>{
                console.log(id)
                Axios.get(`movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
                        console.log("---------",response.data.results[0].key)
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
              };
  return (
        <div className="bannerimage">
                {
                        key ? <YouTube  videoId={key}opts={opts}/>
                        :<img className='bnnerImg' src={movies ? image_url+movies.backdrop_path:""} alt="" />
                }
                <div className="contans">
                        <div className="title">
                                <h2>{movies ? movies.title:""}</h2>
                                </div>
                        <div className="btns">
                                <button onClick={()=>getId(movies.id)}>Play</button>
                                <button>Next</button>
                        </div>
                        
                </div>
        </div>
  
  )
}

export default Banner
import React from 'react'
import { useHomeFetch } from '../Hooks/useHomeFetch'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../API/config';
import Search from '../components/Search';
import Grid from '../components/Grid';
import Banner from '../components/Banner';


const Home = () => {
    const{state,error,searchTerm,setSearchTerm} =useHomeFetch();

    if(error) return <div>Something went wrong!!</div>
  return (
    <>
    {!searchTerm && state.results[0] ?
    <Banner
       image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
       title={state.results[0].original_title}
       text={state.results[0].overview}
    />
    :null
}
<Search setSearchTerm={setSearchTerm}/>
<Grid header={searchTerm ? 'search result':'popular movies'}/>


    </>
  )
}

export default Home
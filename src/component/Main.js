import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cat from './Cats';
import Loading from './Loader';



const Main = () => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);


     useEffect(() => {
        const getCatData = async () => {
            const catUrl = "https://api.thecatapi.com/v1/breeds";
            const imgUrl = "https://api.thecatapi.com/v1/images/search?breed_id=";
           try {
      const catsResponse = await axios.get(catUrl)
      const cats = catsResponse.data
      
      await Promise.allSettled(cats.map(async (cat) => {
        const response = await axios.get(`${imgUrl}${cat.id}`)
        cat.url = response.data[0].url // data is an array with a single object        
      }))

      setData(cats);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error)
    }
}

        getCatData();
    }, [])


    return (
        <main>
            {
              isLoading ? ( <Loading /> ) :
              <div className='wrapper'>
                {data.map((cat) => {       
                  return    <Cat image = {cat.url} cat={cat} key={cat.id}/>
                }
                
                )}
            </div>
          }
      </main>
    )
}

export default Main;

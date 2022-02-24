import React, { useState } from 'react';
import Cat from './Cats';
import Loading from './Loader';
import Button from './Button'


const Main = ({data, isLoading}) => {
     const [visible, setVisible] = useState(17);

      //Load more function 
      const LoadMore = () => {
        const loaded = visible + 5;
        setVisible(loaded)
      }


        //show button if data is not empty
      const showButton = visible < data.length && (<Button onClick = {LoadMore} text = "Load More"/>)


      //Remove loader when data is ready for render
      const Render =   isLoading ? ( <Loading /> ) :
              <div className='wrapper'>
                {data.slice(0, visible).map((cat) => {       
                  return    <Cat image = {cat.url} cat={cat} key={cat.id}/>
                })
                }
                
                 {showButton}
            </div>

    
    return (
        <main>
          {Render}
      </main>
    )
}

export default Main;

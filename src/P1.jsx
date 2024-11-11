
 const FinalData=({props})=>{

    console.log(props);

    const {name, rating, description, genre, cast, watch_url, img_url}=props;

    return (
        // <>
        //   <div>
        //     <img src={props.cEl.img_url} alt="img" width="800px" height="400px" />
        //   </div>

        //   <h1>Name: {props.cEl.name}</h1>
        //   <h2>Rating: {props.cEl.rating}</h2>
        //   <p>Summary: {props.cEl.description}</p>
        //   <p>Genre: {props.cEl.genre}</p>
        //   <p>Cast: {props.cEl.cast}</p>
        //   <a href={props.cEl.watch_url} target="_blank">
        //     <button>{age >= 18 ? "Watch Now" : "Not Avaliable"}</button>
        //   </a>
        // </>

            <>
              <div>
                <img src={img_url} alt="img" width="800px" height="400px" />
              </div>
  
              <h1>Name: {name}</h1>
              <h2>Rating: {rating}</h2>
              <p>Summary: {description}</p>
              <p>Genre: {genre}</p>
              <p>Cast: {cast}</p>
              <a href={watch_url} target="_blank">
                <button>{age >= 18 ? "Watch Now" : "Not Avaliable"}</button>
              </a>
            </>
  
           

      );
    
}

export default FinalData;
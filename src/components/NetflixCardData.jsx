const NetflixCardData = ({ data }) => {
  console.log(data);

  // destructure
  const { img_url, name, rating, description, genre, cast, watch_url } = data;
  // console.log(data);
  // console.log(name);
  let age = 17;

  return (
    <>
      <br />
      <li>
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
      </li>
    </>
  );
};

export default NetflixCardData;

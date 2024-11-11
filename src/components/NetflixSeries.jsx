import cardData from "../api/cardData.json";
import  NetflixCardData  from "../components/NetflixCardData";

const NetflixCard=()=> {
  return (
    <ul>
      {cardData.map((cEl) => {
        return (
          <NetflixCardData key={cEl.id} data={cEl} />
        )
      })}
    </ul>
  );
};
export default NetflixCard;

import Data from "../src/api/cardData.json";
import  FinalData  from "../src/P1";

const Practie = () => {
  return (
    <ul>
      {Data.map((cEl) => {
        console.log(cEl.name);
        let age = 20;
        <FinalData key={cEl.id} element={cEl} />;
      })}
    </ul>
  );
};

export default Practie;

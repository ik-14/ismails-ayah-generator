import React, { useEffect, useState } from "react";

const App = () => {
  const [ayah, setAyah] = useState();

  const fetchAyah = async () => {
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/ayah/${Math.floor(
          Math.random() * 6237
        )}/editions/en.sahih`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAyah(data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAyah();
  }, []);

  console.log(ayah);
  return (
    <div className="mainWrapper">
      <div className="textWrapper">
        <h1>{ayah?.text}</h1>
        <div>
          {ayah?.surah?.englishName} ({ayah?.surah?.englishNameTranslation}) - 
          {ayah?.numberInSurah}
        </div>
        <button className="btn" style={{marginTop: '21px'}} onClick={fetchAyah}>New Ayah</button>
      </div>
      <div className="footerWrapper">
        <p>Made By Ismail Khalil</p>
      </div>
    </div>
  );
};

export default App;

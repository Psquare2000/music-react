import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
function App() {
  const [song1, setSong1] = useState('');
  const [song2, setSong2] = useState('');
  const [song3, setSong3] = useState('');
  const [song4, setSong4] = useState('');
  const [song5, setSong5] = useState('');
  const [year1, setYear1] = useState('');
  const [year2, setYear2] = useState('');
  const [year3, setYear3] = useState('');
  const [year4, setYear4] = useState('');
  const [year5, setYear5] = useState('');
  const [prediction, setPrediction] = useState([]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {


      const response = await axios.get('https://flask-production-9694.up.railway.app/predict/', {
        params: {

            name1: song1,
            year1:year1,

              name2: song2,
              year2:year2,

                name3: song3,
                year3:year3,

                  name4: song4,
                  year4:year4,
                  
                    name5: song5,
                    year5:year5,
                   
        }
      }).then(res=>{
        setPrediction(res.data.MESSAGE)
      });
      
      console.log("Hello",prediction);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className='ddiv'>
      <h1>Give me 5, <span>I’ll give 10!</span></h1>
      <p>“Discover your new favorite music with our cutting-edge clustering algorithm! Our music recommender system uses the Five songs you enter and recommend you new 10 songs that you’ll love. With our intuitive web app, you can easily find new music that matches your unique tastes and preferences. Try it out today and have an amazing listening experience!” 🎶</p>
      <form className="fform" onSubmit={handleSubmit}>
        <input  type="text" value={song1} placeholder="Song" onChange={(e) => setSong1(e.target.value)} />
        <input type="text" value={year1} placeholder="Year" onChange={(e) => setYear1(e.target.value)} />
        <br />
        <input type="text" value={song2} placeholder="Song" onChange={(e) => setSong2(e.target.value)} />
        <input type="text" value={year2} placeholder="Year" onChange={(e) => setYear2(e.target.value)} />
        <br />
        <input type="text" value={song3} placeholder="Song" onChange={(e) => setSong3(e.target.value)} />
        <input type="text" value={year3} placeholder="Year" onChange={(e) => setYear3(e.target.value)} />
        <br />
        <input type="text" value={song4} placeholder="Song" onChange={(e) => setSong4(e.target.value)} />
        <input type="text" value={year4} placeholder="Year" onChange={(e) => setYear4(e.target.value)} />
        <br />
        <input type="text" value={song5} placeholder="Song" onChange={(e) => setSong5(e.target.value)} />
        <input type="text" value={year5} placeholder="Year" onChange={(e) => setYear5(e.target.value)} />
        <br />
        <div className='ButtonDiv'>
          <br/>
          <button className='submit-button' type="submit"><b>Generate</b></button>
        </div>
      </form>
      <div>
      {prediction.length>0 && <h1>Try These: </h1>}
        <ol>
      {prediction && prediction.map(pred => <div><li><b>{pred.name}</b> - {pred.artists}</li></div>)}
      </ol>
      </div>
    </div>
  );
}

export default App;
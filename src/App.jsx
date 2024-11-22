import { useState } from 'react'
import './App.css'
function App() {
  /* js content */

  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState("")
  const [unit, setUnit] = useState('m')

  const validate = (e) => {
    const { name, value } = e.target
    console.log(name);
    console.log(value);
    if (!!value.match('^[0-9.]*$')) {
      if (name == 'height') {
        setHeight(value)
      }
      else if (name == 'weight') {
        setWeight(value)
      }
    }
  }
  let heightInMeters = parseFloat(height);
  if (unit === "cm") {
    heightInMeters = heightInMeters / 100; // Convert cm to meters
  }
  const calculate = () => {
    setResult((weight / heightInMeters ** 2).toFixed(2))
    console.log(result);

  }

  const reset = () => {
    setHeight("")
    setWeight("")
    setResult("")
    setUnit('m')
  }
  return (
    <>
      {/* jsx content */}

      <div className='container-fluid w-100' style={{ height: '100vh' }}>
        <div className='row'>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100vh' }}>
              <div className='border border-light w-50 rounded shadow'>
                <div>
                  <h1 className='text-center p-4 text-light'>BMI Calculator</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-3 border border-warning rounded text-light"
                  >
                {result && ( 
                 <div>
                    
                      <h1 className="py-3 bg-transparent" style={{ height: "40px" }}>
                        {result}
                      </h1>
                      {result < 18.5 ? (
                        <p className="grp text-warning" id='u' >UnderWeight</p>
                      ) : result >= 18.5 && result < 25 ? (
                        <p className="grp text-success">Normal</p>
                      ) : result >= 25 && result <= 30 ? (
                        <p className="grp text-warning">OverWeight</p>
                      ) : (
                        <p className="grp text-danger">Obesity</p>
                      
                      )}
                 </div>
                  
                )}
</div>
                <div className='m-3 '>
                  <input type="text" placeholder='Enter Weight in cm' className='w-100 form-control bg-transparent text-light' name='weight' value={weight} onChange={(e) => validate(e)} />

                </div>
                <div className='m-3 w-75'>
                  <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>


                    <label>
                      <div style={{ position: "relative", display: "inline-block" }}>
                        <input
                          type="text" placeholder='Enter Height in m' className='w-100 form-control bg-transparent text-light' name='height' value={height} onChange={(e) => validate(e)}

                        />
                        <select
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          style={{
                            position: "absolute",
                            right: "5px",
                            top: "0",
                            bottom: "0",
                            border: "none",
                            background: "transparent",
                            color: "#fff",
                            padding: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <option value="m">m</option>
                          <option value="cm">cm</option>
                        </select>
                      </div>
                    </label>
                  </div>
                </div>
                {/*  </div> */}

                <div className='d-flex justify-content-center align-items-center p-3'>
                  <button className='btn btn-success me-3' name='result' value={result} onClick={calculate}> Calculate </button>
                  <button className='btn btn-success' onClick={reset}> Reset </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </>
  )
}

export default App

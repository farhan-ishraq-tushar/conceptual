import { useState } from 'react'
import './App.css'
import Display from './compnents/Display';
import { data } from 'autoprefixer';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './compnents/Navbar';


function Profile(anyName, manyName){
  const {another_props} = anyName;
  console.log(anyName)
  return(
    <div>

      {/* <h1>Hello {anyName.props_name}</h1>; */}
      <h1>Hello {anyName.props_name}</h1>
      <h2>{anyName.another_props}</h2>
      <h2>{another_props}</h2>
      {/* <h2>{manyName.another_props}</h2> */}
    </div>

  )
}

function Profile2(manyName){
  return(
    <div>
      <h1>{manyName.manyName}</h1>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function PersonData({personData}){
  return(
    <div>
      <div>{personData}</div>
    </div>
  )
}


const newInfo = {
  country: 'Bangladesh',
  founded: '1971'
}
function Profile3({countryInfo}){
  
  console.log(countryInfo)

  const {founded} = countryInfo; 
    return(
      <div>
        <h1 className='bg-green-600'>{countryInfo.country}</h1>
        <h1 className='bg-red-400'>{founded}</h1>
      </div>
    )
}

const userData = {}

function App() {
   const location = useLocation();
    console.log(location) 

  const [count, setCount] = useState(0)
  const text = "use of {} in jsx"

  // const arr = [1,2,3,4]


  // Use of useState() function

  // JS Approach
  // let value = 1;
  // const handleClick = ()=>{
  //   value = value + 1;
  // }

  const [currentValue, updateValue] = useState(0);
  const handleClick = () =>{

    updateValue(currentValue + 1)

  }; 


  // Using useState in an array. To update a cart or favorite list we use it.
  const [value, setValue] = useState([])
  /* 
  --- Initial value must be same type as the type of data we want to store ---
  1) for using array in useState we must set the initial value as empty array.
  2) for using object in useState we must set the initial value as empty object.
  3) for using string in useState we must set the initial value as empty string.
  */



  const person = {
    name: "Farhan",
    age: "24",
    hairColor: "Black"

  }

  const arr = [10,20];

  // const data = "something"
  return (
    <>

      <Navbar></Navbar>
      <Link to="/" className='border border-purple-600 p-1 bg-red-300'>Go to Home</Link>

      {/* UseState() understanding */}

      {/* JS Approach */}
      {/* <h1>{value}</h1>
      <button className='p-1 border border-green-500 rounded' onClick={handleClick}>Click</button> */}

    <h1>{currentValue}</h1>

    <button className='p-1 mb-3 border border-green-500 rounded' onClick={handleClick}>Click</button>

      <div className='bg-red-600'>
        {text}
      </div>

      <div className='bg-green-400'>
        Hello
     </div>

     <div style={{backgroundColor:'yellow', color:'brown', fontSize:'40px'}}>
      {person.name}
     </div>

      <Profile props_name="props_data" another_props="newData"></Profile>
      <Profile2 manyName = "manyNameData"></Profile2>
      <Profile3 countryInfo = {newInfo}></Profile3>
      <PersonData personData="personData"  key={1}></PersonData>

      <Display data={data} color="red" isTrue={false} number={10} arr={arr} >
        <h1>Children of Display Component</h1>
      </Display>

      <Display data={data} color="red" isTrue={false} number={10} arr={arr} >
        <h1>Children of Display Component</h1>
      </Display>

      <Display data={data} color="red" isTrue={true} number={10} arr={arr} >
        <h1>Children of Display Component</h1>
      </Display>
      {/* is props array, boolean value, number all must send is object form */}

    </>
  )
}

export default App

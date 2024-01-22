import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function JSXShowcase() {
  return(
  <>
    <div>
      <p>hello i am vinay kumar</p>
      <button>click me</button>
    </div>
  </>
  );
};

//  example of  variables ------------------------------->
function Example() {
  let name ="Vinay Kumar"
return (
   <>
     <h1>"Hello !" {name}</h1>
   </>
  );
}
//  example2 of  function ------------------------------->
function Example2() {
  let func =(firstName,lastName)=>{ 
    return (
      <p>`${firstName} ${lastName}`</p>
    )
  }
return (
   <>
     <h1>"Hello !" {func('vinay','kumar')}</h1>
   </>
  );
};
//  example of  array------------------------------->
function Example3() {
   let arrs=["apple","banana","pine","butter"]
return (
   <>
     <ul>
        {arrs.map((el,index)=>{
         return <li key={index}>{el}</li>
        })}
     </ul>
   </>
  );
};


// line no 5 start
let ConditionalComponent=({isLoggedIn})=> {
  return isLoggedIn ? <P>user is login</P> : 
  <p>user is not login</p> 
}


// const [userId,isLoggedIn]=useState(false)

function App() {
 


  return (
    <>
      <p>vinay</p>
      <JSXShowcase />
      <Example />
      <Example2 />
      <Example3 />
      {/* <ConditionalComponent  isLoggedIn={true}/> */}
    </>
  )
}

export default App

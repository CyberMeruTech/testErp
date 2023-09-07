import './App.css';
import K , { Poem as P , Song as S } from './Poem';
import FirstClassComp from './FirstClassComp' ;

let somejsx = <h1>Hii..</h1>
let name = "Vaibhav"
console.log("Type of somejsx is: ",typeof(somejsx));
let data = {name:"prachi" , profession:"Trainer" , city:"pune"};


function App() {
  return (<>
    {somejsx} {name}
    <p>Hello React...!!</p>
    <p>Resourse name is {data.name} and the resourse belongs to {data.city} and the profession is {data.profession}</p>
    <h4>Poem: </h4>
    <P></P>
    <h4>Song: </h4>
    <S></S>
    <h4>Kavita</h4>
    <K></K>
    <FirstClassComp></FirstClassComp>
    
  </>);
}

export default App;

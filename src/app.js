import {Component} from "react";

//Calss Based Component
class App extends Component{
    //render() return an react element or jsx
    render(){
        return(
        <><h1>hello my world</h1> <h2>this is the react world</h2></>

        ) 

    }

}
// export default App;

//Function based Component

function Listt(){
    return(
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
        </ul>
    );
}
export default (Listt);
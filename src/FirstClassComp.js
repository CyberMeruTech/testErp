import {Component} from "react";
import "./my.css";
//let num = 10;
export default class FirstClassComp extends Component
{
    num = 10;
    constructor(){
        super()
        this.y =10;
    }
    render()
    {
        let num1 = 10;
        return(
            <>
                <div className="outline">
                <h1>Hello from class Component...</h1>
                <p>Square of num: {this.num*this.num} or {num1*num1} or {this.y*this.y}</p>
                </div>
            </>
        ) ;
        
    }
}
import { Component } from "react";
import { Logo as L } from "./Logo";
import { firmInfo as F } from "./firmInfo";
import Footer from "./footer";

export default class AppHw extends Component{

    render(){
        return(
            <>
               <L></L>
               <F></F>
               <Footer></Footer>
            </>
        );
    }

}
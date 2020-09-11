import React , {Component} from 'react'
import './Circle.css'
class Circle extends Component{
    circleClicked(rgb){
        if( rgb !== "noColour"){
            this.props.checkClicked(rgb)
        }
    }
    render(){
        
        return(
            
            <div className = "Circle" style = {{backgroundColor:this.props.rgb}} 
            onClick = {this.props.checkClicked === "colourFound" ? 
            this.circleClicked.bind(this,"noColour"): this.circleClicked.bind(this,this.props.rgb)}></div>
        )
    }
}
export default Circle;
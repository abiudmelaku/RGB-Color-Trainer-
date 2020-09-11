import React , {Component} from 'react'
import './CircleContainer.css'
import Circle from './Circle'
import { FuncCollection} from '../Helper'
class CircleContainer extends Component{
    static defaultProps = {
        Circlenums : 3,
    }
    constructor(props){
        super(props)
        this.state = {
            colourCombo : FuncCollection.choice(this.props.Circlenums),
            pickedColour: Math.floor(Math.random() * this.props.Circlenums),
            colourFoundMsg: ""
        }
        this.hardbtnClicked = this.hardbtnClicked.bind(this)
        this.easybtnClicked = this.easybtnClicked.bind(this)
        this.checkClicked = this.checkClicked.bind(this)
        
    }
    easybtnClicked(){
        const num = 3;
        this.setState({colourCombo:FuncCollection.choice(num)})
        this.setState({pickedColour:Math.floor(Math.random() * num)})
        this.setState({colourFoundMsg:""})
    }
 
    
    hardbtnClicked  () {
        const num = 6;
        this.setState({colourCombo:FuncCollection.choice(num)})
        this.setState({pickedColour:Math.floor(Math.random() * num)})
        this.setState({colourFoundMsg:""})
  
    }
    checkClicked(rgb){
        if(rgb === this.state.colourCombo[this.state.pickedColour]){
            this.setState({colourFoundMsg:"Correct !!!"})
    }else{
        let pc = this.state.colourCombo[this.state.pickedColour]
        let x = this.state.colourCombo.filter(el =>{
            return(
                el !== rgb
            )
        })
        let idx = x.indexOf(pc) // try to change this for big O sake !!!
        this.setState({colourCombo:x})
        this.setState({pickedColour:idx})
        this.setState({colourFoundMsg:"Wrong"})
    }

    }
    // style ={this.state.colourFoundMsg === "Correct !!!" ? {backgroundColor:this.state.colourCombo[this.state.pickedColour]} :
    //         {backgroundColor:""}}
    render(){
        return(
            <div  className = "Container"  >
                <div className = "difficultyBar" >
                    <button onClick = {this.easybtnClicked}>Easy</button>
                    <button onClick = {this.hardbtnClicked}>Hard</button>
                    <h3>{this.state.colourCombo[this.state.pickedColour] } </h3>
                    <p>{this.state.colourFoundMsg}</p>
                </div>
                <div>
                {
                     this.state.colourFoundMsg === "Correct !!!" ?
                     Array.from({length:this.state.colourCombo.length}).map((ci,i) =>{
                        return(
                             <Circle key = {i}  rgb = {this.state.colourCombo[this.state.pickedColour]} checkClicked = {"colourFound"}/>  
                        )
                    }):
                    Array.from({length:this.state.colourCombo.length}).map((ci,i) =>{
                        return(
                            <Circle key = {i}  rgb = {this.state.colourCombo[i]} 
                        pickedColour = {this.state.colourCombo[this.state.pickedColour]} checkClicked = {this.checkClicked} colourFoundMsg = {this.state.colourFoundMsg} /> 
                        )
                    })

                    
                }
                </div>


            </div>
        )
    }
}
export default CircleContainer;
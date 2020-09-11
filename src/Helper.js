// import React from 'react'
 export class FuncCollection{

    static makeRGB = () => {
        let rgb = []
        for(var i = 0 ; i < 3 ; i++){
            let colourNum = Math.floor(Math.random() * 256);
            rgb.push(colourNum)
        }
        return(rgb)
    }
    static choice = (num) =>{
        let arr = []
        for (var i = 0 ; i < num ; i++){
            let rgb = this.makeRGB();
            let colour = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
            if(arr.includes(colour)){
                do{
                    rgb = this.makeRGB();
                    colour = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
                }while(arr.includes(colour) === true)
            }
            arr.push(colour)
        }
        return(arr)
        
    
    }
    static refreshPage() {
        window.location.reload(false);
      }

}

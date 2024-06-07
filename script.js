
            function Rectangle(patternSize){
              let outputString = ""
              for(let i=0; i<patternSize; i++){
                  for(let j=0; j<patternSize; j++){
                      outputString += "*"
                  }
                  outputString += "\n"
              }
              return outputString
          }
            function Flag(patternSize){
              let outputString = ""
              for(let i=0; i<patternSize; i++){
                  for(let j=0; j<patternSize - i; j++){
                      outputString += "*"
                  }
                  outputString += "\n"
              }
              return outputString
          }

            // function Traingle(patternSize){
            //     let triangle = ""
            //     for (let i=0; i<patternSize; i++){
            //         for(let j=0; j<=i; j++){
            //             outputString += "*";
            //         }
            //         triangle +="\n"
            //     }
            //     return outputString;
            // }
            // function HollowRectangle(patternSize){
            //    let outputString = ""
            //    for(let i=0; i<patternSize;  i++){
            //     for(let j=0; j<patternSize; j++){
            //         if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            //             outputString += '*';
            //     }
            //     outputString += "\n"
            //    } 
            //    return outputString
            // }

          
          function Pattern(){
            // if(patternSelect.value == "rectangle"){
            //     output.value = Rectangle(rangeInput.value)
            //     }
            // if(patternSelect.value == "flag"){
            //     output.value = Flag(rangeInput.value)
            //   }
        
              let patterngen = {
                  "rectangle": Rectangle,
                  "flag": Flag,
                //   "hollowrectangle": HollowRectangle,
                //   "traingle": Traingle,
              }
              currentSelectedPatternFunction = patterngen[patternSelect.value]
              output.value = currentSelectedPatternFunction(rangeInput.value)
        }
          gbutton.onclick = Pattern
    
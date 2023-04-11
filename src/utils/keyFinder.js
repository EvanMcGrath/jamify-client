export const keyFinder = (input) => {
    let key = null 
    switch(input) {
        case "-1": 
          key = "Key N.A."
          break;
        case "0":
          key = "C"
          break;
        case "1":
          key = "C#/Db"
          break;
        case "2":
          key = "D"
          break;
        case "3": 
          key = "D#/Eb"
          break;
        case "4":
          key = "E"
          break;
        case "5": 
          key = "F"
          break;
        case "6": 
          key = "F#/Gb"
          break;
        case "7": 
          key = "G"
          break;
        case "8": 
          key = "G#/Ab"
          break;
        case "9": 
          key = "A"
          break;
        case "10": 
          key = "A#/Bb"
          break;
        case "11": 
          key = "B"
          break
      }
    return key
}

export const modeFinder = (input) => {
    let mode = null 
    switch(input) {
        case "1": 
          mode = "maj"
          break;
        case "0":
          mode = "min"
          break;
    }
    return mode
}
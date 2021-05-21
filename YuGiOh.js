const checkYuGiOh = (n)=> {
    let YuGiOh = [];
    const nFloat = parseFloat(n)
  if (typeof n === "boolean"){
      return `Invalid Parameter:${n}`
  } else if (isNaN(n) === true || nFloat === `number`){
      return `Invalid Parameter: ${JSON.stringify(n)}`
  } else {
      for (let i=1; i<=n; i++){
          if (i%2 ===0 && i%3 === 0 && i%5 ===0){
              YuGiOh.push("Yu-Gi-Oh")
          } else if (i%2 === 0 && i%3 ===0){
              YuGiOh.push("Yu-Gi")
          } else if (i%2 === 0 && i%5 === 0){
              YuGiOh.push("Yu-Oh")
          } else if (i%3 === 0 && i%5 === 0){
              YuGiOh.push("Gi-Oh")
          } else if (i%2 === 0){
              YuGiOh.push("Yu")
          } else if (i%3 === 0){
              YuGiOh.push("Gi")
          } else if (i%5 === 0){
              YuGiOh.push("Oh")
          } else{
              YuGiOh.push(i)
          }
      } return YuGiOh;
  }
} 

checkYuGiOh(10)

document.getElementById("zuri").innerHTML=checkYuGiOh()



const people=[
  {name:'Tom',age:36},
  {name:'Jackson',age:24},
  {name:'John',age:44},
  {name:'Saurav',age:20},
  {name:'Aparana',age:25}
]

export default ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      return resolve(people)
    },3000)
  })
}
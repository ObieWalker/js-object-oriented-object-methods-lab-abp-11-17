function BoardMember(name, homestate, training){
  this.name = name
  this.homestate = homestate
  this.training=training
  function veto(){
    return "No, I must disagree"
  }
  function approve(){
    return 'You can do that!'  
  }
  function doCharity(){
    return "I like to help people."
  }
  function releasePressStatement(){
    return "You will see great things from Scuber."
  }
  function sayHi(){
    return `"Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
  }
}
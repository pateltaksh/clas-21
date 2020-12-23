function bounceOff(object1,object2){
    if(object1.x-object2.x<=(object1.width+object2.width)/2&&object2.x-object1.x<=(object1.width+object2.width)/2){
  
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    else if(object1.Y-object2.Y<=(object1.height+object2.height)/2&&object2.Y-object1.Y<=(object1.height+object2.height)/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
    }
  
  }
  function isTouching(o1,o2){
    if(o1.x-o2.x<=(o1.width+o2.width)/2&&o2.x-o1.x<=(o2.width+o1.width)/2&&o1.y-o2.y<=(o1.height+o2.height)/2&&o2.y-o1.y<=(o2.height+o1.height)/2){
  return true;
  
  
  
    }
  else {
    return false
  }
  
  
  }
  

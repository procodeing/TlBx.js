(function(){
  //polyfill
  if(console.debug === undefined){console.debug=console.log;}
  
  //end polyfill
  //define init
  var init = Object.create(null,{});
  
  //debug
  init.dbg = Object.create(null,{});
  init.dbg.callback = function(){for(var i = 0;i<arguments.length;i++){console.debug(arguments[i]);}};
  init.dbg.falsec = function(In){if(In === false){(console.warn("returned false!"));}};
  //end debug
  
  //tools
  init.tools = Object.create(null,{});
  init.tools.shift = function(a){
    
    if((arguments[1] === undefined || (arguments[1]!=="forward"&&arguments[1]!=="back"))||!(Array.isArray(arguments[0]))){
     console.warn("missing or bad value,returning false");
     //dat error handling tough
     return false;
    }
    var d = arguments[1];
    if(d=="back"){
    a.push(a.shift());
    }else if(d==="forward"){
      a.push(a.shift());
    }
    
    
  };
  
  
tlBx=init;
if(tlBx !== init){console.warn('tlBx.js incounterd a fatal error');}
})();

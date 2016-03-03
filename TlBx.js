(function(){
  //polyfill
  if(console.debug === undefined){console.debug=console.log;}
  
  //end polyfill
  
  var init = Object.create(null,{});
  init.dbg = Object.create(null,{});
  init.dbg.callback = function(){for(var i = 0;i<arguments.length;i++){console.debug(arguments[i]);}};
  init.dbg.falsec = function(In){if(In === false){(console.warn("returned false!"));}};
  
tlBx=init;
if(tlBx !== init){console.warn('tlBx.js incounterd a fatal error');}
})();

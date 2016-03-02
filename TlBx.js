(function(){
  //polyfill
  if(console.debug === undefined){console.debug=console.log}
  
  //end polyfill
  
  var init = Object.create(null,{});
  init.dbg = Object.create(null,{});
  init.dbg.callback = function(){for(var i = 0;i<arguments.length;i++){console.debug(arguments[i])}};
  init.dbg.falsec = function(In,customstring){if(In === false){if(customstring !== undefined){customstring+" returned false!";}else(console.warn("returned false!"));}};
  
tlBx=init;
if(tlBx !== init){console.warn('tlBx.js incounterd a fatal error')}else{console.debug('this console has been intergrated with tlBx')}
})();
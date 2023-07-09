// window.addEventListener("load",function(){
//     console.log("load");
// });
// window.addEventListener("unload",function(){
//     console.log("unload");
// });
//  window.addEventListener("scroll",function(){
//      console.log("scrolled");
//  });
// window.addEventListener("resize",function(){
//      console.log("resized");
//      const height = this.window.outerHeight;
//      const width = this.window.outerWidth;
//      console.log("height"+height);
//      console.log("width"+width);
// });
var details = document.querySelector("details");
details.addEventListener("toggle",function(e){
    console.log(e.target.open)
})
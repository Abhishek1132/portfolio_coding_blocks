
window.addEventListener("scroll",function (){
   let w = window.innerWidth;


   if(w>986){
      sy = scrollY;
      card1 = document.getElementById("card1")
      card2 = document.getElementById("card2")
      card3 = document.getElementById("card3")

      if(sy>400 && sy<1400){
         
         card1.classList.remove("revcard1")
         card1.classList.add("card1")
         
      }
      else{
         card1.classList.remove("card1")
         
         card1.classList.add("revcard1")

      }

      if(sy>800 && sy<1700){
         
         card2.classList.remove("revcard2")
         card2.classList.add("card2")
      }
      else{
         card2.classList.remove("card2")
         
         card2.classList.add("revcard2")
      }

      if(sy>1000 && sy<2100){
         
         card3.classList.remove("revcard3")
         card3.classList.add("card3")
      }
      else{
         card3.classList.remove("card3")
         
         card3.classList.add("revcard3")
      }
   }

});
function cal() {
   var ini = (parseInt(document.getElementById("ini").value, 10))
   var pul = (parseInt(document.getElementById("pul").value, 10))
   var fin = (parseInt(document.getElementById("fin").value, 10))
   var res  = document.getElementById("res")

   res.innerText = ""
   
   if (ini <= 0 || fin <= 0) {
      alert("ops, algo dou errado!")
   }
   else {
      if (pul <= 0) {
         alert("pulo invalido...")
         alert("pulo: 1")
         pul = 1
      }
      var num = ini
      if (ini < fin) {
         while (num <= fin) {
            res.innerText = res.innerText + ` ${num} > `
            num = num + pul
         }  
      } else {
         while (num >= fin) {
            res.innerText = res.innerText + ` ${num} > `
            num = num - pul
         }
      }
      res.innerText = res.innerText + " fim!"
   }
}
var elevator = {
   andar : 0,
   print: function(){
     console.log('Andar ' + this.andar);
   },
   up: function(){
      if(this.andar <= 3){
          if(this.andar === 3){
             console.log(this.print());
          }else{
          this.andar++;
          console.log(this.print());
          }
      }
   },
   down: function(){
      if (this.andar >= 0){
          if(this.andar === 0){
            console.log(this.print());
          }else{
          this.andar--;
          console.log(this.print());
          }
      }
   },

};



function message(){

  var number = (Math.trunc((Math.random() * 4) + 1));

  switch(number){

    case 1:
       console.log('voce estah com sorte'); 
       break;
    case 2:
       console.log('voce estah com azar'); 
       break;
    case 3:
       console.log('nem lah nem cah'); 
       break;
    case 4:
       console.log('muito sortudo! vah jogar na mega sena acumulada'); 
       break;
  }

}
function weekday(year, month, day){

   var date = (new Date(year, month-1, day)).getDay();
   var days = ['Dom','Seg','Ter','Qua','Qui','Sex'];
   return days[date]

}


var myArray = [2,4,6,8,10];

function conta_par(){ return(myArray.every(n => n % 2 === 0))};


function fault_leters(texto){
   var faltas = [];
   var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var texto = texto.toLowerCase().split('');

   for (let i = 0; i < alfabeto.length; i++){

        if(texto.indexOf(alfabeto[i]) === -1){
           faltas.push(alfabeto[i]); 
         }
   }
   
   return faltas;

}


var Table = {

      field: [
               [' ',' ',' '],
               [' ',' ',' '],
               [' ',' ',' ']
             ],

      position: [0,0],

      up(){
            if(this.position[0] > 0){
               this.position[0]--;
            }
              this.print()
       },

       down(){
            if(this.position[0] < this.field.length-1){
               this.position[0]++;
            }

              this.print()
       },
       
       right(){
            if(this.position[1] < this.field.length-1){
               this.position[1]++;
            }

            this.print()
       },
    
        left(){
            if(this.position[1] > 0){
               this.position[1]--;
            }

            this.print()
       },

          
   
      print(){
        var lineStr = ''
        for(let i = 0; i < this.field.length; i++){
           for(let j = 0; j < this.field[i].length; j++){
              if(this.position[0] === i  && this.position[1] === j){
                lineStr += '| X |';
                   
              }else{
		lineStr += '|   |';

              }
            }
            lineStr += '\n';
        }
          console.log(lineStr);
      }
}

Table.print();

var list = [1,2,3,'batatas'], listElement = document.querySelector('ul');

function render(){
     var html = '';
     for(let i of list){
         html += `<li>Item ${i}</li>`;

     }
       listElement.innerHTML = html;

}

render();

var func = function(){ console.log('elemento clicado')}

var toggle = function(event){
	if(event.keyCode == 13){
           if(this.value === ''){
               this.style.backgroundColor = 'red';

            }else{
               this.style.backgroundColor = 'green';

            }


	}

}


document.querySelector('#myInput').addEventListener('click',func);

document.querySelector('#myInput').addEventListener('keyup',toggle);
















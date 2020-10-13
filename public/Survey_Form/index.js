// // document.querySelector("#dropdown2").focus();
//   //console.log(document.activeElement.tagName);
//   let date = new Date();
//   let today = date.toDateString();

//   let xhr = new XMLHttpRequest();

//   xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?appid=' + data1.data  + '&q=Toronto&units=metric',true);
  
//   xhr.onload = function(){
//     if(this.status == 200){
//       let data = JSON.parse(xhr.response);
//       let temp = Math.round(data.main.temp);
//       let imgIcon = data.weather[0].icon;
      
//       let para = document.createElement('h3');
//       para.className = 'weatherAdd';
//       para.innerHTML = 'The temprature in Toronto on ' + today + ' is ' + temp + ' degree centigrade!' ;
//       let para2 = document.createElement('IMG');
//       let para3 = 'https://openweathermap.org/img/wn/' + imgIcon + '@2x.png';
      
//       para2.src = para3;
//       para2.className = 'center';
      
      
//       document.querySelector('main').appendChild(para);
//       document.querySelector('main').appendChild(para2);
//     } else {
//       console.log(this.status);
//     }
//   }
//   xhr.onerror = function(){
//     console.log("Request Error");
//   }
//   xhr.send();

  

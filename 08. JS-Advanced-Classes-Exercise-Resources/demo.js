function outter(){
    var num =3;
     function inner(){
         num++;
         var num = 9
        console.log(num)
     }
     inner()
 }
outter()
 //въпрос за Виктор защо е 9 тук и ъндефаинд в браузър

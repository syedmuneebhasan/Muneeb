$(document).ready(function()
{


   function myTime()
   { 
        var a=new Date();
       var b=a.getHours(); 
        var c=a.getMinutes();
        var d=a.getSeconds();
        //alert(`${b}`);
       // alert(`${c}`);

       if(b > 12) 
        {
        b=b-12;
        
    }
    if(b<10){
        b = "0"+b;
    }

    if(c<10){
        c = "0"+c;
    }
    if(d<10){
        d = "0"+d;
    }
        $(".h").text(b);
        $(".m").text(c);
        $(".s").text(d);
    }

    myTime(); 

setInterval(myTime, 500);

 
});
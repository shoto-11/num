function gameover2(){
    /*var list = [     "b1"     ,"d1",
                "a2"     ,"c2",
                     "b3"     ,"d3",
                "a4"     ,"c4"     ];*/
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    var more=0
    for(var n=0;n<=15;n++){
        if(!document.getElementById(array[n]).textContent==""){more=more+1}
    }
    if(more==16){
    if(!(
        document.getElementById("b11").textContent==document.getElementById("a11").textContent||
        document.getElementById("b11").textContent==document.getElementById("b21").textContent||
        document.getElementById("b11").textContent==document.getElementById("c11").textContent||
        document.getElementById("d11").textContent==document.getElementById("c11").textContent||
        document.getElementById("d11").textContent==document.getElementById("d21").textContent||
        document.getElementById("a21").textContent==document.getElementById("a11").textContent||
        document.getElementById("a21").textContent==document.getElementById("b21").textContent||
        document.getElementById("a21").textContent==document.getElementById("a31").textContent||
        document.getElementById("c21").textContent==document.getElementById("c11").textContent||
        document.getElementById("c21").textContent==document.getElementById("b21").textContent||
        document.getElementById("c21").textContent==document.getElementById("d21").textContent||
        document.getElementById("c21").textContent==document.getElementById("c31").textContent||
        document.getElementById("b31").textContent==document.getElementById("a31").textContent||
        document.getElementById("b31").textContent==document.getElementById("b21").textContent||
        document.getElementById("b31").textContent==document.getElementById("b41").textContent||
        document.getElementById("b31").textContent==document.getElementById("c31").textContent||
        document.getElementById("d31").textContent==document.getElementById("d21").textContent||
        document.getElementById("d31").textContent==document.getElementById("c31").textContent||
        document.getElementById("d31").textContent==document.getElementById("d41").textContent||
        document.getElementById("a41").textContent==document.getElementById("a31").textContent||
        document.getElementById("a41").textContent==document.getElementById("b41").textContent||
        document.getElementById("c41").textContent==document.getElementById("b41").textContent||
        document.getElementById("c41").textContent==document.getElementById("c31").textContent||
        document.getElementById("c41").textContent==document.getElementById("d41").textContent)){
        alert("gameover");
    }}}
function color2(){ 
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    for(var i=0;i<=15;i++){
        var place=document.getElementById(array[i]);
        var number=place.textContent;
         place.style.background="#cdbfb6";
        if(!number==""){
            if(number==2){
                place.style.background="#eee4da";
                place.style.color="#776e65";
            }
            else if(number==4){
                place.style.background="#ede0c8";
                place.style.color="#776e65";
            }
            else if(number==8){
                place.style.background="#f2b179";
                place.style.color="#f9f6f2";
            }
            else if(number==16){
                place.style.background="#f59563";
                place.style.color="#f9f6f2";                
            }
            else if(number==32){
                place.style.background="#f67c5f";
                place.style.color="#f9f6f2";
            }
            else if(number==64){
                place.style.background="#f65e3b";
                place.style.color="#f9f6f2";
            }            
            
            else if(number==128){
                place.style.background="#edcf72";
                place.style.color="#f9f6f2";
            }
            else if(number==256){
                place.style.background="#edcc61";
                place.style.color="#f9f6f2";
            }
            else if(number==512){
                place.style.background="#edc850";
                place.style.color="#f9f6f2";
            }
            else if(number==1024){
                place.style.background="#edc53f";
                place.style.color="#f9f6f2";
                place.style.fontsize=40+"px";
            }
            else if(number==2048){
                place.style.background="#e0ba01";
                place.style.color="#f9f6f2";
                place.style.fontsize=40+"px";
            }
            else if(number>=4096){
                place.style.background="#3a3a30";
                place.style.color="#f9f6f2";
                place.style.fontsize=40+"px";
            }
        }}}
function Time2(){var time=setInterval("hogemoge2()",1000);}
function hogemoge2(){
    var num=Number(document.getElementById("cha").textContent)+1;
    document.getElementById("cha").innerHTML=num;
    document.getElementById("number").innerHTML="Time "+Math.floor(num/60)+":"+num%60;
}
function newgame2(){
         var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    for(var i=0;i<16;i++){
    　　var tar=document.getElementById(array[i]);
    　　tar.innerHTML="";
    }var list=[2,4];
    for(var i=0;i<2;i++){
        while(true){
    var num=array[Math.floor(Math.random() * array.length)];
    var target=document.getElementById(num);
            if(!target.textContent){break;}
        }
    var number=list[Math.floor(Math.random() * list.length)];
    target.innerHTML= number;  
    }color(); 
    document.getElementById("score").innerHTML=0;
}

document.onkeydown=keydown;
function keydown2(){
    switch(event.keyCode){
        case 37:
        left2();  
        break;
        case 38:
        up2();
        break;                                                                     
        case 39:
        right2();
        break;
        case 40:
        down2(); 
        break;    
    }
    color2();
    setTimeout("gameover2()",1)
}
function left2(){
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    var count=0
    for(var j=0;j<=12;j=j+4){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i<=j+3;i++ ){
        var place=document.getElementById(array[i]);
        if(!place.textContent==""){
            price.push(place.textContent);
            spot.push(array[i]);
            place.innerHTML="";
        }
    }
    if(price.length==1){
        document.getElementById(array[j]).innerHTML=price[0];
        if(spot[0]==array[j]){count=count+1}
    }
    else if(price.length==2){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=Number(price[0])+Number(price[1]);//price[0]*2でも行けるよ
        }
        else{document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j+1]).innerHTML=price[1];
            if((spot[0]==array[j])&&(spot[1]==array[j+1])){count=count+1;}}
    }
    else if(price.length==3){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=price[0]*2;
            document.getElementById(array[j+1]).innerHTML=price[2];}
        else if(price[1]==price[2]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[1]*2;
            document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j+1]).innerHTML=price[1]*2;
        }
        else{if((spot[0]==array[j])&&(spot[1]==array[j+1])&&(spot[2]==array[j+2])){count=count+1;}
            document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j+1]).innerHTML=price[1];
             document.getElementById(array[j+2]).innerHTML=price[2];
        }
    }
    else if(price.length==4){
            if(price[0]==price[1]){
            if(price[2]==price[3]){
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2+price[2]*2;
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j+1]).innerHTML=price[2]*2;
            }
            else{             
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2;
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j+1]).innerHTML=price[2];
                document.getElementById(array[j+2]).innerHTML=price[3];}
        }
           else if(price[1]==price[2]){
             var math=document.getElementById("score").textContent;
             document.getElementById("score").innerHTML=Number(math)+price[1]*2;
             document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j+1]).innerHTML=price[1]*2;
             document.getElementById(array[j+2]).innerHTML=price[3];}
             else if(price[2]==price[3]){
                 var math=document.getElementById("score").textContent;
                 document.getElementById("score").innerHTML=Number(math)+price[2]*2;
                 document.getElementById(array[j]).innerHTML=price[0];
                 document.getElementById(array[j+1]).innerHTML=price[1];
                 document.getElementById(array[j+2]).innerHTML=price[2]*2;
             }
                 else{count=count+1;
                      document.getElementById(array[j]).innerHTML=price[0];
                      document.getElementById(array[j+1]).innerHTML=price[1];
                      document.getElementById(array[j+2]).innerHTML=price[2];
                      document.getElementById(array[j+3]).innerHTML=price[3];}}
     else{count=count+1}}
    if(count<4){
    var list=[2,4];
        while(true){
    var num=array[Math.floor(Math.random() * array.length)];
    var target=document.getElementById(num);
            if(!target.textContent){break;}
        }
    var number=list[Math.floor(Math.random() * list.length)];
    target.innerHTML= number;  
    }}

function up2(){
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    var count=0
    for(var j=0;j<=3;j++){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i<=j+12;i=i+4 ){
        var place=document.getElementById(array[i]);
        if(!place.textContent==""){
            price.push(place.textContent);
            spot.push(array[i]);
            place.innerHTML="";
        }
    }
    if(price.length==1){
        document.getElementById(array[j]).innerHTML=price[0];
        if(spot[0]==array[j]){count=count+1}
    }
    else if(price.length==2){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=Number(price[0])+Number(price[1]);//price[0]*2でも行けるよ
        }
        else{document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j+4]).innerHTML=price[1];
            if((spot[0]==array[j])&&(spot[1]==array[j+4])){count=count+1;}}
    }
    else if(price.length==3){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=price[0]*2;
            document.getElementById(array[j+4]).innerHTML=price[2];}
        else if(price[1]==price[2]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[1]*2;
            document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j+4]).innerHTML=price[1]*2;
        }
        else{if((spot[0]==array[j])&&(spot[1]==array[j+4])&&(spot[2]==array[j+8])){count=count+1;}
             document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j+4]).innerHTML=price[1];
             document.getElementById(array[j+8]).innerHTML=price[2];
        }
    }
    else if(price.length==4){
            if(price[0]==price[1]){
            if(price[2]==price[3]){
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2+price[2]*2;
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j+4]).innerHTML=price[2]*2;
            }
            else{                         
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2;
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j+4]).innerHTML=price[2];
                document.getElementById(array[j+8]).innerHTML=price[3];}
        }      
        else if(price[1]==price[2]){
             var math=document.getElementById("score").textContent;
             document.getElementById("score").innerHTML=Number(math)+price[1]*2;
             document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j+4]).innerHTML=price[1]*2;
             document.getElementById(array[j+8]).innerHTML=price[3];}
             else if(price[2]==price[3]){
                 var math=document.getElementById("score").textContent;
                 document.getElementById("score").innerHTML=Number(math)+price[2]*2;
                 document.getElementById(array[j]).innerHTML=price[0];
                 document.getElementById(array[j+4]).innerHTML=price[1];
                 document.getElementById(array[j+8]).innerHTML=price[2]*2;
             }
                 else{count=count+1;
                      document.getElementById(array[j]).innerHTML=price[0];
                      document.getElementById(array[j+4]).innerHTML=price[1];
                      document.getElementById(array[j+8]).innerHTML=price[2];
                      document.getElementById(array[j+12]).innerHTML=price[3];}}
        else{count=count+1}}
if(count<4){
    var list=[2,4];
        while(true){
    var num=array[Math.floor(Math.random() * array.length)];
    var target=document.getElementById(num);
            if(!target.textContent){break;}
        }
    var number=list[Math.floor(Math.random() * list.length)];
    target.innerHTML= number;  
    }}

function right2(){
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    var count=0
    for(var j=3;j<=15;j=j+4){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i>=j-3;i=i-1 ){
        var place=document.getElementById(array[i]);
        if(!place.textContent==""){
            price.push(place.textContent);
            spot.push(array[i]);
            place.innerHTML="";
        }
    }
    if(price.length==1){
        document.getElementById(array[j]).innerHTML=price[0];
        if(spot[0]==array[j]){count=count+1}
    }
    else if(price.length==2){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=Number(price[0])+Number(price[1]);//price[0]*2でも行けるよ
        }
        else{document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j-1]).innerHTML=price[1];
            if((spot[0]==array[j])&&(spot[1]==array[j-1])){count=count+1;}}
    }
    else if(price.length==3){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j]).innerHTML=price[0]*2;
            document.getElementById(array[j-1]).innerHTML=price[2];}
        else if(price[1]==price[2]){            
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[1]*2;
            document.getElementById(array[j]).innerHTML=price[0];
            document.getElementById(array[j-1]).innerHTML=price[1]*2;
        }
        else{if((spot[0]==array[j])&&(spot[1]==array[j-1])&&(spot[2]==array[j-2])){count=count+1;}
             document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j-1]).innerHTML=price[1];
             document.getElementById(array[j-2]).innerHTML=price[2];
        }
    }
    else if(price.length==4){
        if(price[0]==price[1]){
            if(price[2]==price[3]){           
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2+price[2]*2;
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j-1]).innerHTML=price[2]*2;
            }
            else{           
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2;            
                document.getElementById(array[j]).innerHTML=price[0]*2;
                document.getElementById(array[j-1]).innerHTML=price[2];
                document.getElementById(array[j-2]).innerHTML=price[3];}
        }        
        else if(price[1]==price[2]){
             var math=document.getElementById("score").textContent;
             document.getElementById("score").innerHTML=Number(math)+price[1]*2;
             document.getElementById(array[j]).innerHTML=price[0];
             document.getElementById(array[j-1]).innerHTML=price[1]*2;
             document.getElementById(array[j-2]).innerHTML=price[3];}
             else if(price[2]==price[3]){
                 var math=document.getElementById("score").textContent;
                 document.getElementById("score").innerHTML=Number(math)+price[2]*2;
                 document.getElementById(array[j]).innerHTML=price[0];
                 document.getElementById(array[j-1]).innerHTML=price[1];
                 document.getElementById(array[j-2]).innerHTML=price[2]*2;
             }
                 else{count=count+1;
                      document.getElementById(array[j]).innerHTML=price[0];
                      document.getElementById(array[j-1]).innerHTML=price[1];
                      document.getElementById(array[j-2]).innerHTML=price[2];
                      document.getElementById(array[j-3]).innerHTML=price[3];}}
            
    
    else{count=count+1}}
if(count<4){
    var list=[2,4];
        while(true){
    var num=array[Math.floor(Math.random() * array.length)];
    var target=document.getElementById(num);
            if(!target.textContent){break;}
        }
    var number=list[Math.floor(Math.random() * list.length)];
    target.innerHTML= number;  
    }}

function down2(){
    var array = ["a11","b11","c11","d11",
                 "a21","b21","c21","d21",
                 "a31","b31","c31","d31",
                 "a41","b41","c41","d41"];
    var count=0
    for(var j=0;j<=3;j++){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j+12;i>=j;i=i-4 ){
        var place=document.getElementById(array[i]);
        if(!place.textContent==""){
            price.push(place.textContent);
            spot.push(array[i]);
            place.innerHTML="";
        }
    }
    if(price.length==1){
        document.getElementById(array[j+12]).innerHTML=price[0];
        if(spot[0]==array[j+12]){count=count+1}
    }
    else if(price.length==2){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j+12]).innerHTML=Number(price[0])+Number(price[1]);//price[0]*2でも行けるよ
        }
        else{document.getElementById(array[j+12]).innerHTML=price[0];
            document.getElementById(array[j+8]).innerHTML=price[1];
            if((spot[0]==array[j+12])&&(spot[1]==array[j+8])){count=count+1;}}
    }
    else if(price.length==3){
        if(price[0]==price[1]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[0]*2;
            document.getElementById(array[j+12]).innerHTML=price[0]*2;
            document.getElementById(array[j+8]).innerHTML=price[2];}
        else if(price[1]==price[2]){
            var math=document.getElementById("score").textContent;
            document.getElementById("score").innerHTML=Number(math)+price[1]*2;
            document.getElementById(array[j+12]).innerHTML=price[0];
            document.getElementById(array[j+8]).innerHTML=price[1]*2;
        }
        else{if((spot[0]==array[j+12])&&(spot[1]==array[j+8])&&(spot[2]==array[j+4])){count=count+1;}
            document.getElementById(array[j+12]).innerHTML=price[0];
             document.getElementById(array[j+8]).innerHTML=price[1];
             document.getElementById(array[j+4]).innerHTML=price[2];
        }
    }
    else if(price.length==4){
        if(price[0]==price[1]){
            if(price[2]==price[3]){
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2+price[2]*2;
                document.getElementById(array[j+12]).innerHTML=price[0]*2;
                document.getElementById(array[j+8]).innerHTML=price[2]*2;
            }
            else{             
                var math=document.getElementById("score").textContent;
                document.getElementById("score").innerHTML=Number(math)+price[0]*2;
                document.getElementById(array[j+12]).innerHTML=price[0]*2;
                document.getElementById(array[j+8]).innerHTML=price[2];
                document.getElementById(array[j+4]).innerHTML=price[3];}
        }
               else if(price[1]==price[2]){
             var math=document.getElementById("score").textContent;
             document.getElementById("score").innerHTML=Number(math)+price[1]*2;
             document.getElementById(array[j+12]).innerHTML=price[0];
             document.getElementById(array[j+8]).innerHTML=price[1]*2;
             document.getElementById(array[j+4]).innerHTML=price[3];}
             else if(price[2]==price[3]){            
                 var math=document.getElementById("score").textContent;
                 document.getElementById("score").innerHTML=Number(math)+price[2]*2;
                 document.getElementById(array[j+12]).innerHTML=price[0];
                 document.getElementById(array[j+8]).innerHTML=price[1];
                 document.getElementById(array[j+4]).innerHTML=price[2]*2;
             }
                 else{count=count+1;
                      document.getElementById(array[j+12]).innerHTML=price[0];
                      document.getElementById(array[j+8]).innerHTML=price[1];
                      document.getElementById(array[j+4]).innerHTML=price[2];
                      document.getElementById(array[j]).innerHTML=price[3];}}         
        else{count=count+1} }
    
    if(count<4){
    var list=[2,4];
        while(true){
    var num=array[Math.floor(Math.random() * array.length)];
    var target=document.getElementById(num);
            if(!target.textContent){break;}
        }
    var number=list[Math.floor(Math.random() * list.length)];
    target.innerHTML= number;  
    }}
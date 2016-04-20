        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth()+1;
        var date = now.getDate();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds()
/*    window.onload = function(){
    alert(year + "年" + month + "月" + date + "日");
    }
    
*/
    var number;
    
    window.onload = function(){
    var mybtn = document.querySelector('#submit');
    mybtn.onclick = function(){
        number = parseInt(document.send_number.number.value);
        alert(number+"を入力しました");
        console.log(number);
        return false;
    }
    var kingbtn = document.getElementById("king");
    kingbtn.onclick = function(){
        var first_number = Math.floor(Math.random()*number + 1);
        var second_number = (first_number+Math.floor(Math.random()*number + 1))%(number + 1);
        var ms = now.getMilliseconds();
//        console.log(first_number);
//        console.log(second_number);

        var first_member_text = document.getElementById("member1");
        var second_member_text = document.getElementById("member2");
        var action_text = document.getElementById("action");
        var args =["キスする","ハグする","寝る","ポッキーゲーム","何もナシ"]
        if(ms < 200){
            action_text.innerHTML = args[0];
        }else if(200<= ms < 400){
            action_text.innerHTML = args[1];
        }else if(400 <= ms < 600){
            action_text.innerHTML = args[2];
        }else if(600 <= ms < 800){
            action_text.innerHTML = args[3];
        }else if(800 <= ms < 1000) {
            action_text.innerHTML = args[4];
        }
        
        
        first_member_text.innerHTML =first_number;
        second_member_text.innerHTML =second_number;
        
    };
    
    };
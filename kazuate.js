// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let seikai = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();
let yosoe = document.querySelector('#kaitou');
yosoe.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 第5回課題:テキストボックスの数値をここに代入
    let yosoa = document.querySelector('input[name="yoso"]'); 
    let yoso = Number(yosoa.value);
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
    let result;
    let answer;
    kaisu = kaisu+1;
    answer = kaisu+"回目の予想："+yoso;
    let yo = document.querySelector('span#answer');
    yo.textContent = answer;
    if(kaisu>3||seikai!=0){
        result = "答えは"+kotae+"でした。すでにゲームは終わっています";
    }
    else if(yoso===kotae){
        result = "正解です。おめでとう！";
        seikai = seikai+1;
    }
    else if(kaisu===3){
        result = "まちがい。残念でした答えは"+kotae+"です。";
    }
    else if(yoso<kotae){
        result = "まちがい。答えはもっと大きいですよ";
    }
    else{
        result = "まちがい。答えはもっと小さいですよ";
    }
    let re = document.querySelector('span#result');
    re.textContent = result;

}
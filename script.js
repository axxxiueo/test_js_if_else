const score = Math.floor(Math.random() *20);
document.getElementById("score").textContent = score;

if(score === 20){
    document.getElementById("test").textContent = "スコアは20です。"
}else if(score === 10){
    document.getElementById("test").textContent = "スコアは10です。"
}else if(score === 5){
    document.getElementById("test").textContent = "スコアは5です。"
}else if(score >= 1){
    document.getElementById("test").textContent = "スコアは1以上です。"
}else{
    document.getElementById("test").textContent = "スコアはそれ以外です。"
}
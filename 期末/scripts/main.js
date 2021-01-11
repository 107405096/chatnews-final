function bigger(){
    // document.getElementById("commentBox").innerHTML='<font>'+'</font>';
    document.getElementById("commentBox").setAttribute("id", "biggerCommentBox")
} 

window.onload = function(){
    let btn = document.querySelector('button');
    let text = document.querySelector('textarea');
    let list = document.querySelector('#list');
    let colors = ["red","pink"];
    let nub = 0;

    // 如果使用者沒有輸入任何字，跳出提示
    btn.onclick = function(){
        if(text.value.trim() == ""){
            alert("打點字吧");
        return false;
    }

    // 建立留言板的序列
    let li = document.createElement("li");
    li.innerHTML = text.value;
    // li.className = colors[nub%colors.length];
    /* 判斷a標籤已經被新增，就讓a標籤顯示出來，否則就新增 */

    // 判斷上一則留言的顏色以決定新留言的顏色
    if(list.children[0]&&list.children[0].className=="red"){
        li.className = "pink";
    } else {
        li.className = "red";}
    
    li.onmouseout = function(){
        a.style.display = "none";
    };


    list.insertBefore(li,list.children[0]);
    text.value = ""};

};

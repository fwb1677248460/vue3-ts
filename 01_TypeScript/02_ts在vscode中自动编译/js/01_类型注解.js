(() => {
    function showMsg(str) {
        return '床上明月光' + str;
    }
    let msg = "疑是地上霜";
    //msg是一个数组
    // let msg = [10,20,30]
    //智能提错
    console.log(showMsg(msg));
})();

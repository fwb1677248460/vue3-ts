(()=>{
    function sayHi(str:string) {
        return "你好啊" + str;
    }
    let text = "小甜甜"
    console.log(sayHi(text))
})()

//ts文件中如果只有js语法，那么它是可以直接被引用，否则需要编译成js文件
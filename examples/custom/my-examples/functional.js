function cant(){
    console.log("Can't do this");
    function can(){
        console.log("Can do this");
    }
    const arr = [1, 'a'];
    can();
}

cant();

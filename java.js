for (let i = 1; i <= 100; i++) {
    let output = 0;
    if (i % 3 == 0){
        output = 1;
    }
    if (i % 5 == 0){
        if (output == 1) {
            output = 3;
        } else {
            output = 2;
        }
    }
    let messages = [i,"Media","College","MediaCollege"];
    console.log(messages[output]);
}

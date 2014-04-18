var fibonacci = function (cap) {
    var sum = 0;
    var seq = [1, 2];
    for (i = 1; i <= cap; i = seq[seq.length - 1]) {
        var temp = seq[seq.length - 1] + seq[seq.length - 2];
        if (temp > cap) {
            break;   
        } else {
            seq.push(temp);   
        }
    }
    console.log('Generated fibonacci sequence ~ ' + seq);
    
    for (i = 1; i <= seq[seq.length - 1]; i++) {
        if (seq[i] % 2 === 0) {
            sum += seq[i];
        }
    }
    console.log('Sum of even numbers out of sequence ~ ' + sum);
}

fibonacci(4000000);
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a-b)
    s = s.sort((a,b) => a-b)
    
    let i=0
    let count = 0;
    let j=0
    while(i<s.length){
        if(s[i] >= g[j]){
            count++
            j++
        }
        i++
    }
    
    return count
};
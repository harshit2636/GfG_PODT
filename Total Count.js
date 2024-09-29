class Solution {

    totalCount(k, arr) {
        // code here
        return arr.reduce((count,e)=>count+=(e%k===0)?parseInt(e/k):parseInt(e/k)+1,0);
    }
}

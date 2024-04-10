class Solution {
    static int findSingle(int n, int arr[]) {
        int Xor = 0;
        
        for(int i: arr)
            Xor ^= i;
            
        return Xor;
    }
}
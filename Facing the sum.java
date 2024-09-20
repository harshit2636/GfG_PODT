class Solution {
    // Returns count buildings that can see sunlight
    public int countBuildings(int[] height) {
        int count = 0;
        int max = 0;
       for(int i=0;i < (height.length) ; i++){
           if(max < height[i]){
               count++;
               max = height[i];
           }
       }
       return count;
    }
}

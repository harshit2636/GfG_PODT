class Solution {
    public int[] matrixDiagonally(int[][] mat) {
        int eo = 0;//check even or odd.
        int row = mat.length;
        int col = mat[0].length;
        int count = 0;
        int ans[] = new int[row*col];

        for(int i=0;i<row;i++){
            if(eo%2!=0){
                int pos = 0;
                for(int j=i;j>=0;j--){
                    ans[count++] = mat[pos][j];
                    pos++;
                }
            }else{
                int pos = i;
                for(int j=0;j<=i;j++){
                    ans[count++] = mat[pos][j];
                    pos--;
                }
            }
            eo++;
        }

        for(int i=1;i<row;i++){
            if(eo%2!=0){
                int pos = i;
                for(int j=col-1;j>=i;j--){
                    ans[count++] = mat[pos][j];
                    pos++;
                }
            }else{
                int pos = row-1;
                for(int j=i;j<col;j++){
                    ans[count++] = mat[pos][j];
                    pos--;
                }
            }
            eo++;
        }

        return ans;

    }
}

class Solution {
    int find(int mat2[][],int n,int x)
    {
        int k1=0;
        int k2=n-1;
        while(k1<n && k2>=0)
        {
            if(mat2[k1][k2]==x)
                return x;
            else if(mat2[k1][k2]>x)
                k2--;
            else if(mat2[k1][k2]<x)
                k1++;
        }
        return 0;
    }
    int countPairs(int mat1[][], int mat2[][], int n, int x) {
        // code here
        int c=0;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(mat1[i][j]<x)
                {
                    int t=find(mat2,n,x-mat1[i][j]);
                    if(t>0)
                        c++;
                }
            }
        }
        return c;
    }
}

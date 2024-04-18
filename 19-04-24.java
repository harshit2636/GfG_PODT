class Solution
{
    //Function to find two repeated elements.
    public int[] twoRepeated(int arr[], int n)
    {
        HashMap<Integer,Integer> hm=new HashMap<>();
        for(int i=0;i<n+2;i++){
            hm.put(arr[i],hm.getOrDefault(arr[i],0)+1);
        }
        int [] ans=new int[2];
        Arrays.fill(ans,-1);
        int j=1;
        for(int i=n+1;i>=0;i--){
            if(j==-1) break;
            if(hm.get(arr[i])==2 && ans[1] != arr[i]) {
                ans[j]=arr[i];
                j--;
        }
    }
       return ans;
    }
}
class Solution {
    int lps(String str) {
        int len = 0;
        int n = str.length();
        int [] lps = new int[n];
        int i = 1;
        
        while(i < n)
        {
            if(str.charAt(i) == str.charAt(len))
                lps[i++] = ++len;
            else
            {
                if(len > 0)
                    len = lps[len-1];
                else
                    i++;
            }
        }

        return lps[n-1];
    }
}

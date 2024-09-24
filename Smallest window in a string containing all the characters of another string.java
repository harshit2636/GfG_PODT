class Solution
{
    //Function to find the smallest window in the string s consisting
    //of all the characters of string p.
    public static String smallestWindow(String s, String p)
    {
    
    HashMap<Character,Integer>pfreq = new HashMap<>();
    int n = s.length();
    int m = p.length();
    
    if(n<m || s==null && p == null)return "-1"; // if both the string are null 
    // or length of s is less than length of p
    
    //Count the frequencies of charcater of string p

    for(int i = 0;i<m;i++){
        char ch  = p.charAt(i);
        pfreq.put(ch,pfreq.getOrDefault(ch,0)+1);
    }
    
    
    int minLen = Integer.MAX_VALUE;//for minimum length
    int startIndex = 0;//got finding the startIndex of minimum length substring
    int left = 0;//point to the start
    int count = 0;//track that how much character of p is in window of s
    
    HashMap<Character,Integer>sfreq = new HashMap<>();//window of substring 
    
    for(int right = 0;right<n;right++){
        //it will move forward to expand the window
        char ch = s.charAt(right);
        
        //check that the current character is present in string p or not
        if(pfreq.containsKey(ch)){
            
    //if present than put in map or increase the freq
        sfreq.put(ch,sfreq.getOrDefault(ch,0)+1);
      
      //check the current character's frequency is less than or equal to p's characters's frequency
        if(sfreq.get(ch)<=pfreq.get(ch)) count++;
        
        //if freq is equal or less then count how much character of p is in window
            
        }
        //if all the charcters is in window then its time to 
        //calculate the minlen and shrink the window
        while(count == m){
            //calculate the length in first iteration left is at starting
        int len = right-left+1;
        // find the minimum
        if(len<minLen){
            minLen = len;
            //it will track the starting of minimum subststing as in first iteration it is 0
            startIndex = left;
        }
        
        //it is for leftside character to shrink the window 
        //in example 1 t comes two times in window then eleminate the first one
        //to find the minimum length
        
        char leftChar = s.charAt(left);
        //first check current chacter is in window or not 
        if(sfreq.containsKey(leftChar)){
 
 //reduce the frequency
            sfreq.put(leftChar,sfreq.get(leftChar)-1);
            
            //remove the count means number of character 
            //the while loop depend on this count
            if(sfreq.get(leftChar)<pfreq.get(leftChar))
              count--;
            
        }
            left++;
        
        
    }
    
    }
    
    //check if minimum length is updated of not if not then return this
    if(minLen == Integer.MAX_VALUE) return "-1";
    
    return s.substring(startIndex ,startIndex+minLen);
    
    
    }
}

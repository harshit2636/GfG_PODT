class Solution:
    
    #Function to count number of ways to reach the nth stair 
    #when order does not matter.
    def countWays(self,m):        
       # code here
        
        mod = 1000000007        
        if m == 0:            
            return 0
            
        elif m ==1:
            
            return 1        

        n1 = 1

        n2 = 2

        for _ in range(3, m+1):

            n1, n2  =  n2,  (n1+1)% mod
            
        return n2
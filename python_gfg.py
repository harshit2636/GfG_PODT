class Solution:    
    def grayToBinary(self,n):
        ans=0
        while n:
            ans^=n
            n>>=1
        return ans
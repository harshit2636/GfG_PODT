class Solution:
    def findMissing(self,a,b,n,m):
        ans=[]
        k=set(b)
        for i in a:
            if i not in k:
                ans.append(i)
        return ans
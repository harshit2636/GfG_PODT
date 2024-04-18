class Solution:
    def twoRepeated(self, arr , n):
        temp = {}
        ans,count = [],0
        for i in arr:
            if count==2:
                break
            temp[i] = temp.get(i,0)+1
            if temp[i]==2:
                ans.append(i)
                count+=1
        return ans
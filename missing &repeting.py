class Solution:
    def findTwoElement( self,arr): 
        # code 
        arr.sort()
        p = 0
        for i in range(0,len(arr)-1):
            if arr[i] == arr[i+1]:
                p = arr[i]
        
        ans = 1        
        for i in range(0,len(arr)):
            if arr[i] == ans:
                ans += 1
                
        return [p,ans]     

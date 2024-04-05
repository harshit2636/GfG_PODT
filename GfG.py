import bisect
class Solution:
    def min_operations(self,nums):
        # Code here
        for i in range(len(nums)):
            nums[i] -= i
        
        lis = []
        for num in nums:
            pos = bisect.bisect_right(lis, num)
            if pos == len(lis):
                lis.append(num)
            else:
                lis[pos] = num
                
        return len(nums) - len(lis)
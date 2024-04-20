class Solution:
    
    def findUnion(self, arr1, arr2, n, m):
        # Convert arrays to sets to remove duplicates
        s1 = set(arr1)
        s2 = set(arr2)
        
        # Union of two sets
        union_set = s1.union(s2)
        
        # Convert set back to list and sort
        result = sorted(list(union_set))
        
        return result
class Solution:
    def countElements(self, a, b, n, query, q):
        # Sort array b
        b.sort()
        
        # Function to perform binary search to find count of elements less than or equal to x in b
        def binary_search(x):
            left, right = 0, len(b) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if b[mid] <= x:
                    left = mid + 1
                else:
                    right = mid - 1
            return left
        
        # Initialize result list
        result = []
        
        # Iterate through each query
        for x in query:
            # Find count of elements less than or equal to a[x] using binary search
            count = binary_search(a[x])
            result.append(count)
        
        return result
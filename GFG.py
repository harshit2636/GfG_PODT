class Solution:
    def absolute_diff(self, root):
        # Function to perform inorder traversal of the binary tree
        def inorder(root, arr):
            if root == None:
                return
            inorder(root.left, arr)
            arr.append(root.data)
            inorder(root.right, arr)

        # Initialize ans with positive infinity
        ans = float('inf')
        arr = []  # List to store inorder traversal elements
        inorder(root, arr)  # Perform inorder traversal

        # If there are only two elements in the tree, return their absolute difference
        if len(arr) == 2:
            return abs(arr[0] - arr[1])

        # Iterate through the elements of the inorder traversal
        for i in range(1, len(arr) - 1):
            # Calculate absolute differences with adjacent elements and update ans
            ans = min(ans, abs(arr[i] - arr[i - 1]), abs(arr[i] - arr[i + 1]))
        return ans
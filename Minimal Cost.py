def minimizeCost(self, k, arr):
        # code here
        dp = [0]*len(arr)
        for i in range(1, len(arr)):
            dp[i] = float('inf')
            for j in range(i-k, i):
                if j >= 0:
                    dp[i] = min(dp[i], abs(arr[i]-arr[j])+dp[j])
        return dp[-1]

class solution:
    def pairAndSum(self, n, arr):
        total_sum = 0
        # Iterate through each bit position
        for bit in range(32):
            # Count the number of set bits at this position
            count = 0
            for num in arr:
                if num & (1 << bit):
                    count += 1
            # Calculate the sum contributed by this bit position
            total_sum += count * (count - 1) // 2 * (1 << bit)
        return total_sum

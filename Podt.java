class Solution {
    int[] Series(int n) {
        ArrayList<Integer> res = new ArrayList<>();
        int a = 0, b = 1, mod = (int)(1e9 + 7);

        res.add(a);
        res.add(b);

        for(int i = 2; i <= n; i++) {
            int c = (a + b) % mod;
            res.add(c);

            a = b;
            b = c;
        }

        int arr[] = new int[res.size()];
        for(int i = 0; i < res.size(); i++)
            arr[i] = res.get(i);

        return arr;
    }
}
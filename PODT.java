class Solution {
    String removeDuplicates(String str) {
        Set<Character> set = new HashSet<>();
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (!set.contains(ch)) {
                result.append(ch);
                set.add(ch);
            }
        }
        return result.toString();
    }
}

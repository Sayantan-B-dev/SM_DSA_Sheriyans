# Group Anagrams (LeetCode 49)

---

### 📘 Explanation

We are given an array of strings and need to **group all anagrams together**.

**Anagram:** Words that have same letters but in different order.
Example: `"eat"` and `"tea"` are anagrams.

Key idea: **Sort the letters of each word** → words with same sorted letters belong to same group.

---

### 📝 Algorithm (Step-by-step)

1. Create a **Map** to store groups (`key → array of words`).
2. For each word in the input array:

   * Sort the letters of the word → `key`.
   * If map does not have `key`, create a new array.
   * Push the word into the array corresponding to `key`.
3. Return all values of the map (groups of anagrams).

---

### 🔑 Pseudocode

```
function groupAnagrams(strs):
    map = empty Map

    for word in strs:
        key = sort letters of word and join as string
        if key not in map:
            map[key] = []
        map[key].push(word)

    return all values of map
```

---

### 🧮 Dry Run

Input: `["eat","tea","tan","ate","nat","bat"]`

* "eat" → sorted="aet" → map={"aet":["eat"]}
* "tea" → sorted="aet" → map={"aet":["eat","tea"]}
* "tan" → sorted="ant" → map={"aet":["eat","tea"], "ant":["tan"]}
* "ate" → sorted="aet" → map={"aet":["eat","tea","ate"], "ant":["tan"]}
* "nat" → sorted="ant" → map={"aet":["eat","tea","ate"], "ant":["tan","nat"]}
* "bat" → sorted="abt" → map={"aet":["eat","tea","ate"], "ant":["tan","nat"], "abt":["bat"]}

Output = `[["eat","tea","ate"], ["tan","nat"], ["bat"]]`

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼────────┐
       │ Initialize Map │
       └───────┬────────┘
               │
     ┌─────────▼─────────┐
     │ For each word in strs │
     │   key = sorted letters │
     │   if key not in map:   │
     │       map[key]=[]      │
     │   map[key].push(word)  │
     └─────────┬─────────────┘
               │
         ┌─────▼───────┐
         │ Return all values │
         └──────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

Think of anagrams like **scrambled words**:

* `"eat"` and `"tea"` → same letters, just mixed.

Trick:

1. Sort letters → all anagrams become **same string**.
2. Use a **map** to group all words with same sorted letters.
3. Return groups → anagrams together!

---

### ✨ Easy Second Look (Beginner’s view)

* Sort each word → get key.
* Use map → key → array of words.
* Push word into correct group.
* Return map values.

Done → Group Anagrams solved easily!

---

# Plus One (LeetCode 66)

---

### 📘 Explanation

We are given an array `digits` representing a **non-negative integer**, where each element is a digit.
We need to **add 1** to the number and return the resulting array of digits.

Example:

* Input: `[1,2,3]` → represents 123 → Output: `[1,2,4]`
* Input: `[9,9,9]` → represents 999 → Output: `[1,0,0,0]`

---

### 📝 Algorithm (Step-by-step)

**Method 1: Manual carry**

1. Start from the **last digit** (rightmost).
2. Add 1:

   * If digit < 9 → increment and return array.
   * Else → set digit = 0 and continue to next left digit.
3. If all digits were 9 → add `1` at the beginning of array.

**Method 2: BigInt (simpler in JS)**

1. Convert array to number using `join('')` → string → `BigInt`.
2. Add `1n`.
3. Convert back to string, split to digits, and map to numbers.

---

### 🔑 Pseudocode

**Method 1 (manual):**

```
function plusOne(digits):
    n = length of digits
    for i = n-1 to 0:
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    prepend 1 to digits
    return digits
```

**Method 2 (BigInt):**

```
num = BigInt(join digits as string) + 1
result = split num into digits and convert to numbers
return result
```

---

### 🧮 Dry Run

Input: `[1, 2, 9]`

**Manual method:**

* i=2 → digits[2]=9 → set digits[2]=0
* i=1 → digits[1]=2 < 9 → increment → digits[1]=3
* Return `[1,3,0]`

**BigInt method:**

* join → "129" → BigInt → 129n + 1n = 130n
* split → ["1","3","0"] → map → [1,3,0]

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
     ┌─────────▼─────────┐
     │ Convert digits to number │
     └─────────┬─────────┘
               │
     ┌─────────▼─────────┐
     │ Add 1              │
     └─────────┬─────────┘
               │
     ┌─────────▼─────────┐
     │ Convert back to array of digits │
     └─────────┬─────────┘
               │
         ┌─────▼───────┐
         │ Return result │
         └─────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

Imagine digits `[1,2,9]` are like a **number written on paper**.

* Start from the **last digit**: add 1.
* If it becomes 10 → write 0 and carry 1 to the left.
* Repeat until no carry left.
* If carry reaches the first digit → add 1 at the beginning.

Or in JS, you can **convert digits to a big number**, add 1, and split again → easy!

---

### ✨ Easy Second Look (Beginner’s view)

* Start from last digit, add 1, carry if 10.
* If all digits are 9 → add 1 at front.
* Or use BigInt → convert, add, split.

Done → Plus One solved easily!

---

# Add Binary (LeetCode 67)

---

### 📘 Explanation

We are given two **binary strings** `a` and `b`.
We need to **add them** and return the result as a **binary string**.

Example:

* Input: `"1010"`, `"1011"` → Output: `"10101"`

---

### 📝 Algorithm (Step-by-step)

**Method 1: Using BigInt (JS simple)**

1. Convert `a` and `b` to `BigInt` using prefix `"0b"` → binary number.
2. Add the two numbers.
3. Convert the result back to binary string using `toString(2)`.

**Method 2: Manual bit addition (carry)**

1. Initialize `carry = 0` and result string `res=""`.
2. Start from **last digit** of both strings.
3. For each digit pair:

   * sum = digit_a + digit_b + carry
   * append `(sum % 2)` to result
   * carry = `Math.floor(sum / 2)`
4. After loop, if carry > 0 → append carry
5. Reverse result string and return.

---

### 🔑 Pseudocode

**BigInt method:**

```
function addBinary(a, b):
    A = BigInt("0b" + a)
    B = BigInt("0b" + b)
    C = A + B
    return C.toString(2)
```

**Manual method:**

```
i = a.length-1
j = b.length-1
carry = 0
res = ""

while i>=0 or j>=0:
    sum = carry
    if i>=0: sum += int(a[i])
    if j>=0: sum += int(b[j])
    res = (sum % 2) + res
    carry = sum // 2
    i--, j--

if carry > 0: res = "1" + res
return res
```

---

### 🧮 Dry Run

Input: `"1010"`, `"1011"`

**BigInt method:**

* `"0b1010"` → 10n, `"0b1011"` → 11n
* 10 + 11 = 21
* 21 → binary `"10101"` → Output

**Manual method:**

* i=3,j=3 → 0+1+0=1 → res="1", carry=0
* i=2,j=2 → 1+1+0=2 → res="0", carry=1
* i=1,j=1 → 0+0+1=1 → res="1", carry=0
* i=0,j=0 →1+1+0=2 → res="0", carry=1
* After loop → carry=1 → res="1" + "0101"="10101"

✅ Output = `"10101"`

---

### 🖼️ Flowchart

```
        ┌─────────────┐
        │ Start       │
        └─────┬───────┘
              │
   ┌──────────▼──────────┐
   │ Convert a,b to BigInt │
   └──────────┬──────────┘
              │
   ┌──────────▼──────────┐
   │ Sum = A + B          │
   └──────────┬──────────┘
              │
   ┌──────────▼──────────┐
   │ Convert sum to binary│
   │ return as string     │
   └──────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Binary numbers are like **light switches** → 0=off, 1=on.
* Add two binary numbers **like decimal addition**, carry if sum ≥ 2.
* JS trick → `"0b"+binary` → number, add, then convert back to binary → easy!

---

### ✨ Easy Second Look (Beginner’s view)

* Convert binary → BigInt → add → convert back.
* Or manually add from last digit with carry → reverse result.

Done → Add Binary solved easily!

---

# Convert Sorted Array to Binary Search Tree (LeetCode 108)

---

### 📘 Explanation

We are given a **sorted array** and need to convert it into a **height-balanced BST**.

**Height-balanced BST:**

* Difference in heights of left and right subtrees ≤ 1.
* To maintain balance, pick the **middle element** as root.

Key idea: **Divide and conquer**

1. Middle element → root
2. Left subarray → left subtree
3. Right subarray → right subtree
4. Recursively repeat for left and right

---

### 📝 Algorithm (Step-by-step)

1. Base case: if array is empty → return `null`.
2. Find middle index → `mid = Math.floor(nums.length / 2)`.
3. Create `root = new TreeNode(nums[mid])`.
4. Left subtree = `sortedArrayToBST(nums.slice(0, mid))`
5. Right subtree = `sortedArrayToBST(nums.slice(mid + 1))`
6. Return `root`.

---

### 🔑 Pseudocode

```
function sortedArrayToBST(nums):
    if nums is empty:
        return null

    mid = floor(length(nums)/2)
    root = new TreeNode(nums[mid])

    root.left = sortedArrayToBST(nums[0..mid-1])
    root.right = sortedArrayToBST(nums[mid+1..end])

    return root
```

---

### 🧮 Dry Run

Input: `[1,2,3,4,5,6,7]`

* mid=3 → root=4
* left=[1,2,3] → mid=1 → root.left=2 → left=1, right=3
* right=[5,6,7] → mid=1 → root.right=6 → left=5, right=7

Resulting BST:

```
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
```

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ Is nums empty?   │
       └───────┬─────────┘
               │No
       ┌───────▼─────────┐
       │ mid = floor(len/2) │
       │ root = nums[mid]   │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ root.left = sortedArrayToBST(leftHalf) │
       │ root.right = sortedArrayToBST(rightHalf) │
       └───────┬─────────┘
               │
         ┌─────▼─────┐
         │ Return root│
         └───────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Sorted array → like a line of numbers in order.
* To make a balanced tree:

  1. Pick the middle number → make it the root.
  2. Left part → left child, right part → right child.
  3. Repeat for subarrays → smaller and smaller until empty.
* Result → tree that is balanced, not skewed.

---

### ✨ Easy Second Look (Beginner’s view)

* Middle element → root
* Left half → left subtree, right half → right subtree
* Recursively repeat
* Return root

Done → Convert Sorted Array to BST solved easily!

---

# Valid Palindrome (LeetCode 125)

---

### 📘 Explanation

We are given a string `s` and need to check if it is a **palindrome**:

* Reads the **same forwards and backwards**.
* Ignore **non-alphanumeric characters** and **case differences**.

Example:

* `"A man, a plan, a canal: Panama"` → palindrome → `true`
* `"race a car"` → not palindrome → `false`

---

### 📝 Algorithm (Step-by-step)

1. Remove all **non-alphanumeric characters** using regex.
2. Convert string to **lowercase**.
3. Reverse the cleaned string.
4. Compare cleaned string with its reverse:

   * If equal → palindrome
   * Else → not palindrome

**Optional optimized two-pointer method:**

1. Initialize two pointers `left=0`, `right=str.length-1`.
2. While `left<right`:

   * Skip non-alphanumeric characters.
   * Compare `str[left]` and `str[right]`.
   * If unequal → return false.
   * Else → move pointers inward.
3. Return true if pointers meet.

---

### 🔑 Pseudocode

**Simple method (using reverse):**

```
function isPalindrome(s):
    str = remove non-alphanumeric characters from s
    str = convert str to lowercase
    str2 = reverse of str
    return str == str2
```

**Two-pointer method:**

```
left = 0
right = length(s)-1

while left < right:
    while left<right and s[left] not alphanumeric: left++
    while left<right and s[right] not alphanumeric: right--
    if lowercase(s[left]) != lowercase(s[right]): return false
    left++, right--

return true
```

---

### 🧮 Dry Run

Input: `"A man, a plan, a canal: Panama"`

* Cleaned: `"amanaplanacanalpanama"`
* Reversed: `"amanaplanacanalpanama"`
* Compare → equal → return `true`

Input: `"race a car"`

* Cleaned: `"raceacar"`
* Reversed: `"racaecar"`
* Compare → not equal → return `false`

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ Remove non-alphanumeric │
       │ Convert to lowercase    │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ Reverse string   │
       │ Compare with original │
       └───────┬─────────┘
               │
        ┌──────▼───────┐
        │ Return true/false │
        └───────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Palindrome → word or sentence that is the **same forwards and backwards**.
* Ignore spaces, commas, punctuation, uppercase/lowercase.
* Trick:

  1. Clean the string → only letters & numbers.
  2. Reverse it.
  3. Check if reversed string is same → yes → palindrome.

---

### ✨ Easy Second Look (Beginner’s view)

* Clean string → lowercase + alphanumeric only
* Reverse string → compare with original
* True → palindrome, False → not palindrome

Done → Valid Palindrome solved easily!

---

# Contains Duplicate (LeetCode 217)

---

### 📘 Explanation

We are given an array `nums`.
We need to check if **any value appears at least twice** in the array.

Example:

* Input: `[1,2,3,1]` → `true`
* Input: `[1,2,3,4]` → `false`

Key idea: Use a **Set** to store **unique elements**.

* If the array length > set size → duplicate exists.

---

### 📝 Algorithm (Step-by-step)

1. Create a `Set` from the array → stores **unique elements**.
2. Compare `nums.length` with `set.size`:

   * If equal → all unique → return false
   * If not equal → duplicate exists → return true

**Optional alternative:**

* Iterate through array:

  * If element exists in set → return true
  * Else → add element to set
* Return false if loop completes

---

### 🔑 Pseudocode

```
function containsDuplicate(nums):
    set = new Set(nums)
    if nums.length != set.size:
        return true
    else:
        return false
```

**Alternative (manual check):**

```
set = empty set
for num in nums:
    if num in set: return true
    else: add num to set
return false
```

---

### 🧮 Dry Run

Input: `[1,2,3,1]`

* Set = `{1,2,3}`
* nums.length=4, set.size=3 → not equal → return true

Input: `[1,2,3,4]`

* Set = `{1,2,3,4}`
* nums.length=4, set.size=4 → equal → return false

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ Create Set from nums │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ nums.length != set.size? │
       └───────┬─────────┘
       Yes ───▶ return true
       No  ───▶ return false
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Set → bag that **stores only unique numbers**.
* Put all numbers in the bag → if bag size < total numbers → some numbers repeated → duplicate exists.

---

### ✨ Easy Second Look (Beginner’s view)

* Create set → unique numbers
* Compare size with original array
* If smaller → duplicate exists → return true
* Else → return false

Done → Contains Duplicate solved easily!

---

# Contains Duplicate II (LeetCode 219)

---

### 📘 Explanation

We are given an array `nums` and an integer `k`.
We need to check if the array contains **duplicates** such that **the indices of the duplicates are at most k apart**.

Example:

* Input: `[1,2,3,1]`, k=3 → `true` (1 appears at indices 0 and 3 → difference 3 ≤ k)
* Input: `[1,0,1,1]`, k=1 → `true` (1 appears at indices 2 and 3 → difference 1 ≤ k)
* Input: `[1,2,3,1,2,3]`, k=2 → `false`

Key idea: Use a **Map** to track **last index** of each number.

---

### 📝 Algorithm (Step-by-step)

1. Initialize an empty `Map`.
2. Traverse the array with index `i`:

   * If `nums[i]` exists in map:

     * Check difference `i - map[nums[i]]` ≤ `k` → return true
   * Update map: `map[nums[i]] = i` (store current index)
3. If loop completes → return false

---

### 🔑 Pseudocode

```
function containsNearbyDuplicate(nums, k):
    map = empty Map

    for i from 0 to length(nums)-1:
        if nums[i] in map AND i - map[nums[i]] <= k:
            return true
        map[nums[i]] = i
    
    return false
```

---

### 🧮 Dry Run

Input: `[1,2,3,1]`, k=3

* i=0 → map={1:0}
* i=1 → map={1:0,2:1}
* i=2 → map={1:0,2:1,3:2}
* i=3 → nums[3]=1 exists → i-map[1]=3-0=3 ≤ 3 → return true

Input: `[1,2,3,1,2,3]`, k=2

* i=0 → map={1:0}
* i=1 → map={1:0,2:1}
* i=2 → map={1:0,2:1,3:2}
* i=3 → nums[3]=1 → i-map[1]=3-0=3 > k → update map[1]=3
* i=4 → nums[4]=2 → i-map[2]=4-1=3 > k → update map[2]=4
* i=5 → nums[5]=3 → i-map[3]=5-2=3 > k → update map[3]=5
* Loop ends → return false

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ Initialize Map   │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ For each index i │
       │   if nums[i] in map AND i-map[nums[i]] <= k │
       │       return true │
       │   map[nums[i]] = i │
       └───────┬─────────┘
               │
         ┌─────▼───────┐
         │ Return false │
         └─────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Map → notebook storing **last seen index of each number**.
* Go through numbers one by one:

  * If number seen before → check difference of indices
  * If ≤ k → duplicate too close → return true
  * Else → update notebook with new index
* If no such pair → return false

---

### ✨ Easy Second Look (Beginner’s view)

* Use Map to remember **last index** of each number
* Compare current index with last index → check ≤ k
* Return true if found, else false

Done → Contains Duplicate II solved easily!

---

# Valid Anagram (LeetCode 242)

---

### 📘 Explanation

We are given two strings `s` and `t`.
We need to check if `t` is an **anagram** of `s`:

* Both strings contain **same letters with same frequency**, order doesn’t matter.

Example:

* Input: `"anagram"`, `"nagaram"` → `true`
* Input: `"rat"`, `"car"` → `false`

Key idea: **Sort the letters of both strings** → if equal → anagram.

---

### 📝 Algorithm (Step-by-step)

1. If lengths of `s` and `t` are different → return false.
2. Sort letters of `s` → `s1`
3. Sort letters of `t` → `t1`
4. Compare `s1` and `t1`:

   * Equal → `true`
   * Not equal → `false`

**Optional frequency map method:**

1. Count frequency of letters in `s` → map1
2. Count frequency of letters in `t` → map2
3. Compare the two maps → if equal → true, else false

---

### 🔑 Pseudocode

**Sort method:**

```
function isAnagram(s, t):
    if length(s) != length(t): return false
    s1 = sort letters of s
    t1 = sort letters of t
    return s1 == t1
```

**Frequency map method:**

```
if length(s) != length(t): return false
map = empty map
for ch in s: map[ch]++
for ch in t: map[ch]--
for each value in map:
    if value != 0: return false
return true
```

---

### 🧮 Dry Run

Input: `"anagram"`, `"nagaram"`

* Sort: `"anagram"` → `"aaagmnr"`
* Sort: `"nagaram"` → `"aaagmnr"`
* Compare → equal → `true`

Input: `"rat"`, `"car"`

* Sort: `"rat"` → `"art"`
* Sort: `"car"` → `"acr"`
* Compare → not equal → `false`

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ Check lengths s & t │
       │ Not equal? → false │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ Sort s and t      │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ Compare sorted s1 & t1 │
       │ Equal → true / else false │
       └───────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Anagram → same letters, any order.
* Trick: sort letters → compare:

  * Same → yes, anagram
  * Different → no, not anagram

---

### ✨ Easy Second Look (Beginner’s view)

* Check length → if different → false
* Sort both strings → compare
* True → anagram, False → not anagram

Done → Valid Anagram solved easily!

---

# Find Resultant Array After Removing Anagrams (LeetCode 2273)

---

### 📘 Explanation

We are given an array of strings `words`.
We need to **remove any word that is an anagram of the previous word** in the array.

Example:

* Input: `["abba","baba","bbaa","cd","cd"]` → Output: `["abba","cd"]`
* Explanation:

  * `"baba"` and `"bbaa"` are anagrams of `"abba"` → removed
  * `"cd"` → not an anagram of previous `"bbaa"` → kept

Key idea: Use a **helper function** to check anagrams and **compare each word with the previous kept word**.

---

### 📝 Algorithm (Step-by-step)

1. Define `isAnagram(s, t)` → checks if two strings are anagrams:

   * Sort letters and compare.
2. Initialize `ans = [words[0]]` (first word always kept).
3. Traverse `words` from index 1 to end:

   * If `words[i]` is **not an anagram** of `words[i-1]` → push to `ans`.
4. Return `ans`.

---

### 🔑 Pseudocode

```
function isAnagram(s, t):
    if length(s) != length(t): return false
    return sorted(s) == sorted(t)

function removeAnagrams(words):
    ans = [words[0]]
    for i = 1 to length(words)-1:
        if not isAnagram(words[i], words[i-1]):
            ans.append(words[i])
    return ans
```

---

### 🧮 Dry Run

Input: `["abba","baba","bbaa","cd","cd"]`

* ans = ["abba"]
* i=1 → "baba" vs "abba" → anagram → skip
* i=2 → "bbaa" vs "baba" → anagram → skip
* i=3 → "cd" vs "bbaa" → not anagram → ans.push("cd") → ans=["abba","cd"]
* i=4 → "cd" vs "cd" → anagram → skip

Output: `["abba","cd"]`

---

### 🖼️ Flowchart

```
         ┌─────────────┐
         │ Start       │
         └─────┬───────┘
               │
       ┌───────▼─────────┐
       │ ans = [words[0]] │
       └───────┬─────────┘
               │
       ┌───────▼─────────┐
       │ For i = 1 to end │
       │   if not isAnagram(words[i], words[i-1]): │
       │       ans.push(words[i])                   │
       └───────┬─────────┘
               │
         ┌─────▼───────┐
         │ Return ans  │
         └─────────────┘
```

---

### 👦 Explanation for a 10-year-old Indian kid

* Go through the list of words one by one.
* If current word is just a **scramble of previous word** → skip it.
* Else → keep it.
* Use sorting to check if two words have same letters → simple anagram check.

---

### ✨ Easy Second Look (Beginner’s view)

* First word → always keep
* Check each next word:

  * If anagram of previous → skip
  * Else → keep
* Return final array

Done → Find Resultant Array After Removing Anagrams solved easily!

---

**Completed this question. Waiting for "next".**

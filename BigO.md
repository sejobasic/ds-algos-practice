----Big O Cheat Sheet----

-Big Os-

O(1) Constant- no loops

O(log N) Logarithmic- usually searching algos have log(n) if they are sorted (Binary Search) (not on hash maps)

O(n) Linear- for loops/while loops

O(n*log(n)) Log Linear- Sorting operations usually

O(n^2) Quadratic- every element in a collection needs to be compared to every other element. Two nested loops

O(2^N) Exponential- recursive algorithms that solve a problem of size N

O(n!) - You are adding a loop for every element


**Iterating through half a collection is still O(n)
**Two separate collections: O(a + b)


-What can cause time in a function?-
Operations (+, -, *, /)
Comparisons (<, >, ===)
Looping (for, while)
Outside function call (function())

-Rule Book-

Rule 1: Always worst case
Rule 2: Remove constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
    * for steps in order
    * for nested steps
Rule 4: Drop Non-dominant terms










// ===== Problem 1: Staircase — O(n²) output size =====
var staircase = function (n: number): string {
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
  return rows.join("\n");
};

// ===== Problem 2: Grading Students — O(n) =====
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((g) => (g >= 38 && 5 - (g % 5) < 3 ? g + 5 - (g % 5) : g));
};

// ===== Problem 3: Time Conversion — O(1) =====
var timeConversion = function (s: string): string {
  let h = Number(s.slice(0, 2)) % 12; // 12AM -> 0, 12PM -> 0 then +12
  if (s.endsWith("PM")) h += 12;
  return String(h).padStart(2, "0") + s.slice(2, 8);
};

// ===== Problem 4: String Repeat — O(n·|s|) =====
var repeatStr = function (n: number, s: string): string {
  return s.repeat(n);
};

// ===== Problem 5: Reversed Strings — O(n) =====
var solution = function (str: string): string {
  return [...str].reverse().join(""); // spread keeps emoji/surrogate pairs intact
};

// ===== Problem 6: Sum of Positive — O(n) =====
var positiveSum = function (arr: number[]): number {
  return arr.reduce((sum, x) => (x > 0 ? sum + x : sum), 0);
};

// ===== Problem 7: Grasshopper — Summation — O(1) via Gauss formula =====
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};

// ===== Problem 8: Convert a Boolean to a String — O(1) =====
var booleanToString = function (b: boolean): string {
  return String(b);
};

// ===== Problem 9: Fizz Buzz — O(n) =====
var fizzBuzz = function (n: number): string[] {
  return Array.from({ length: n }, (_, idx) => {
    const i = idx + 1;
    if (i % 15 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return String(i);
  });
};

// ===== Problem 10: Running Sum of 1D Array — O(n) =====
var runningSum = function (nums: number[]): number[] {
  let sum = 0;
  return nums.map((x) => (sum += x));
};

// ===== Problem 11: Richest Customer Wealth — O(rows·cols) =====
var maximumWealth = function (accounts: number[][]): number {
  return accounts.reduce((max, row) => Math.max(max, row.reduce((a, b) => a + b, 0)), 0);
};

// ===== Problem 12: Remove Duplicates from Sorted Array — O(n) time, O(1) space =====
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) if (nums[i] !== nums[k - 1]) nums[k++] = nums[i];
  return k;
};

// ===== Problem 13: Contains Duplicate — O(n) time, O(n) space =====
var containsDuplicate = function (nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
};

// ===== Problem 14: Move Zeroes — O(n) time, O(1) space, in-place =====
var moveZeroes = function (nums: number[]): void {
  let k = 0;
  for (const x of nums) if (x !== 0) nums[k++] = x;
  nums.fill(0, k);
};

// ===== Problem 15: Merge Sorted Array — O(m+n) time, O(1) space, in-place =====
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, w = m + n - 1;
  // fill from the back so unmerged nums1 values are never overwritten
  while (j >= 0) nums1[w--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
};

// ===== Problem 16: 3Sum — O(n²) time, sort + two pointers =====
var threeSum = function (nums: number[]): number[][] {
  const a = [...nums].sort((x, y) => x - y); // copy so the caller's array is untouched
  const res: number[][] = [];
  for (let i = 0; i < a.length - 2 && a[i] <= 0; i++) {
    if (i > 0 && a[i] === a[i - 1]) continue;
    let lo = i + 1, hi = a.length - 1;
    while (lo < hi) {
      const sum = a[i] + a[lo] + a[hi];
      if (sum < 0) lo++;
      else if (sum > 0) hi--;
      else {
        res.push([a[i], a[lo], a[hi]]);
        while (lo < hi && a[lo] === a[lo + 1]) lo++;
        while (lo < hi && a[hi] === a[hi - 1]) hi--;
        lo++;
        hi--;
      }
    }
  }
  return res;
};

// ===== Problem 17: Plus One — O(n) =====
var plusOne = function (digits: number[]): number[] {
  const d = [...digits];
  for (let i = d.length - 1; i >= 0; i--) {
    if (d[i] < 9) {
      d[i]++;
      return d;
    }
    d[i] = 0;
  }
  return [1, ...d]; // all digits were 9
};

// ===== Problem 18: Reverse String — O(n) time, O(1) space, in-place =====
var reverseString = function (s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) [s[i], s[j]] = [s[j], s[i]];
};

// ===== Problem 19: Length of Last Word — O(n) =====
var lengthOfLastWord = function (s: string): number {
  const t = s.trimEnd();
  return t.length - t.lastIndexOf(" ") - 1;
};

// ===== Problem 20: Longest Common Prefix — O(total chars) =====
var longestCommonPrefix = function (strs: string[]): string {
  let prefix = strs[0] ?? "";
  for (const s of strs) while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
};

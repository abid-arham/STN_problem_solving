import assert from "node:assert/strict";

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

// ===== Tests =====
const inPlace = <T>(arr: T[], fn: (a: T[]) => void): T[] => (fn(arr), arr);

// 1
assert.equal(staircase(4), "   #\n  ##\n ###\n####");
assert.equal(staircase(1), "#");
assert.ok(staircase(6).split("\n").every((row) => row.endsWith("#")));
// 2
assert.deepEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
assert.deepEqual(gradingStudents([84, 29, 57]), [85, 29, 57]);
assert.deepEqual(gradingStudents([37, 40, 99, 100]), [37, 40, 100, 100]);
// 3
assert.equal(timeConversion("07:05:45PM"), "19:05:45");
assert.equal(timeConversion("12:00:00AM"), "00:00:00");
assert.equal(timeConversion("12:30:45PM"), "12:30:45");
assert.equal(timeConversion("01:00:00AM"), "01:00:00");
assert.equal(timeConversion("11:59:59PM"), "23:59:59");
// 4
assert.equal(repeatStr(3, "ha"), "hahaha");
assert.equal(repeatStr(0, "hello"), "");
assert.equal(repeatStr(4, "a"), "aaaa");
// 5
assert.equal(solution("world"), "dlrow");
assert.equal(solution("hello"), "olleh");
assert.equal(solution(""), "");
// 6
assert.equal(positiveSum([1, -4, 7, 12]), 20);
assert.equal(positiveSum([-1, -2, 0, -5]), 0);
assert.equal(positiveSum([]), 0);
// 7
assert.equal(summation(8), 36);
assert.equal(summation(1), 1);
assert.equal(summation(100), 5050);
// 8
assert.equal(booleanToString(true), "true");
assert.equal(booleanToString(false), "false");
// 9
assert.deepEqual(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
assert.deepEqual(fizzBuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
assert.deepEqual(fizzBuzz(0), []);
// 10
assert.deepEqual(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
assert.deepEqual(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
assert.deepEqual(runningSum([3, -1, 0, -2]), [3, 2, 2, 0]);
// 11
assert.equal(maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
assert.equal(maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
assert.equal(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]), 17);
// 12
{
  const a = [1, 1, 2];
  assert.equal(removeDuplicates(a), 2);
  assert.deepEqual(a.slice(0, 2), [1, 2]);
  const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  assert.equal(removeDuplicates(b), 5);
  assert.deepEqual(b.slice(0, 5), [0, 1, 2, 3, 4]);
  assert.equal(removeDuplicates([]), 0);
  assert.equal(removeDuplicates([7]), 1);
}
// 13
assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
assert.equal(containsDuplicate([]), false);
// 14
assert.deepEqual(inPlace([0, 1, 0, 3, 12], moveZeroes), [1, 3, 12, 0, 0]);
assert.deepEqual(inPlace([0, 0, 1], moveZeroes), [1, 0, 0]);
assert.deepEqual(inPlace([1, 2, 3], moveZeroes), [1, 2, 3]);
assert.equal(moveZeroes([0]), undefined);
// 15
assert.deepEqual(inPlace([1, 2, 3, 0, 0, 0], (a) => merge(a, 3, [2, 5, 6], 3)), [1, 2, 2, 3, 5, 6]);
assert.deepEqual(inPlace([1], (a) => merge(a, 1, [], 0)), [1]);
assert.deepEqual(inPlace([0], (a) => merge(a, 0, [1], 1)), [1]);
assert.deepEqual(inPlace([4, 5, 6, 0, 0, 0], (a) => merge(a, 3, [1, 2, 3], 3)), [1, 2, 3, 4, 5, 6]);
assert.deepEqual(inPlace([-1, 0, 0, 0], (a) => merge(a, 2, [-2, 0], 2)), [-2, -1, 0, 0]);
// 16
assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
assert.deepEqual(threeSum([0, 1, 1]), []);
assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
assert.deepEqual(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
assert.deepEqual(threeSum([-2, 0, 1, 1, 2]), [[-2, 0, 2], [-2, 1, 1]]);
// 17
assert.deepEqual(plusOne([1, 2, 9]), [1, 3, 0]);
assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
assert.deepEqual(plusOne([9, 9, 9]), [1, 0, 0, 0]);
assert.deepEqual(plusOne([0]), [1]);
// 18
assert.deepEqual(inPlace(["h", "e", "l", "l", "o"], reverseString), ["o", "l", "l", "e", "h"]);
assert.deepEqual(inPlace(["H", "a", "n", "n", "a", "h"], reverseString), ["h", "a", "n", "n", "a", "H"]);
assert.deepEqual(inPlace([], reverseString), []);
// 19
assert.equal(lengthOfLastWord("Hello World"), 5);
assert.equal(lengthOfLastWord("   fly me   to   the moon  "), 4);
assert.equal(lengthOfLastWord("luffy is still joyboy"), 6);
assert.equal(lengthOfLastWord("a"), 1);
// 20
assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
assert.equal(longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters"); // problem says "inter", but all three share the "s"
assert.equal(longestCommonPrefix(["solo"]), "solo");
assert.equal(longestCommonPrefix(["abc", ""]), "");

console.log("all 20 passed");

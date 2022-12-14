# Getting Started to Matching Sums App


## **Functional Specifications.**

The objective of the project is to find pairs of integers from a list that sum a given value.

**EXAMPLE:**

`> app 1,9,5,0,20,-4,12,16,7 12`

`+ 12,0`

`+ 5,7`

`+ 16,-4`

In the example, there is an executable named `app`. It takes as command line
arguments a comma separated list of integers, and the target integer. Your app
doesn't need to have identical input/output mechanisms. For example, you could
read from a file instead of the command line.
​
You can assume that all input values are integers. You can assume that there aren't
any repeat values in the list.
​
The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.

### Solution:
Build a react app that shows two inputs, one for a list of integers separated by comma
and one for the number to be evaluated in the algorithm.

The app will display a list of combinations that match the requirement as shows the example.

In case there is no match in the list, `No match` will be shown.

### TASKS:

- Create inputs and results list components for the interface.
- Make matching function with numbers list and sum result values.
- Show matches in the interface as expected.

**NOTE:** TDD will be applied in the project so unit tests will be implicitly included in tasks.


## Available Scripts

In the project directory, you can run:

### To run the project, and visualize it in the broswer using url localhost:3000
`npm run start`

### To run all tests
`npm run test`

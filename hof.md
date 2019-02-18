# Higher Order Functions

## Create a counter function

Create a function that keeps track of the number of times it is called.

HINT: You'll need a closure.

## Partial application

* create an add function:

```js
function add(a, b) {
  return a + b;
}
```

* create another function that partially applies the add function

## BONUS: Memoize function

Memoize is a function that takes a function as an argument (let's call this `fn`). It then
returns a function (let's call this `memoFn`). When `memoFn` is invoked it will invoke `fn`.
However, if the same arguments are passed to `memoFn` it will not invoke `fn` and instead
return the last result.

HINT: You'll need a closure.
HINT: for testing you can use `jest.fn()`

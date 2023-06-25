- ; are getting missed
- multi line console are not getting handled correctly
  ```js
  console.log(
    "hello"
  );
  ```
- only removing console log not whole line because it produces this kind of bugs where important code gets removed
  ```js
    console.log("helo"); const example=23
  ```
- writing tests
- readme update
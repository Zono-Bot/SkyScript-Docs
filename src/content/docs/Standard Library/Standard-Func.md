---
title: "Standard Functions"
description: "Standard Functions"
---
# 1: input and  output
To output something to the console, it's pretty easy! just use the `out()` function
```ts
// index.ss //
​
out("Hello World")
```
and for input it's also as easy as the first one, you use the `ask()` function like:
```ts
// index.ss //
​
ask("> ")
```
That was easy right? time to go to the next one!
# 2: Controlling the process
Contolling the process is easy and straight forward, there are 3 functions that help you with it!
A: Pausing execution
to pause execution of your skyscript file, it's pretty easy, by using the wait() function
```ts
// index.ss //
​
out("hello")
wait(2) // waits for 2 seconds //
out("world!")
```
B: Exiting the process
to exit the skyscript process before the end of file (error handling or something like that) you will use the exit() function like this:
```ts
// index.ss //
​
set num = 8
set inp = ask("Guess a number: ")
​
if(inp != num){
    out("oh no! the answer was wrong, try again!")
    exit(0) // will stop execution and exit //
} else {
    out("that's great! you've got to level 2")
    num = 5
    inp = ask("Guess a number: ")
    // more code here //
}
C: Running external files
to run a external (.ss) file you use the run() function like:
// out.ss //
​
set version = "0.0.4-a:

```
​
```ts
// index.ss //
​
run("out.ss") // out.ss and index.ss are in the same folder
​
out(version)
```

# 3: Maths
Maths is one of the first supported featues in skyscript, and it got may use cases, but cause we're at the standard functions part we'll only cover the nnei() function
```ts
// index.ss //
​
set thing = nnei(9-8/2)
​
out(thing) // returns 5
 ```
 
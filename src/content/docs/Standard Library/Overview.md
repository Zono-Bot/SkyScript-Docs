---
title: "Overview"
description: "Overview of the language"
---
# SkyScript
SkyScript's standard library grows on every update! and it's userbase grows too
# Use Cases
SkyScript Can't be used for advanced stuff (yet) so it's just for fun!
# Keywords
```ts
// this is a comment! //
// comments must be closed with a pair of slashes
//
if // if statement //
else // else statement //
set // variable declaration (non constant) //
fun // function declaration //
lock // variable declaration (constant) //
true // true //
false // false //
null // null //
```
# Usages
if/else
the if keyword is used to check if a given expression is right, and is it is right, it runs the code inside it, otherwise it will run the else code if present
Example: 
```ts
// index.ss //

if(1 == 1){
   out("good job!")
} // this code will execute //

if("a" != "a"){
   out("what?") // this code won't execute //
} else {
   out("good job!") // this code will execute //
}
```
# set/lock
have you ever used a variable? if yes, then set/lock are the way to declare them in skyscript
```ts
// index.ss //

set test = "variable"
test = "works"

lock thing = "locked variable"

thing = "variable" // crash here //
fun
```
standard functions are useful, but what if you need your own function? here comes the fun keyword
```ts
// index.ss //

fun foo(){
    out("bar")
}

fun greet(name){
    set text = "Welcome "+name+" To skyScript"
    out(text)
}
```

```ts
 foo() 
greet("Sky")
```
---
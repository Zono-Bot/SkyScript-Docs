---
title: "Overview"
description: "Overview of the language"
---
# SkyScript
SkyScript's standard library grows on every update! and it's userbase grows too
# Initialzation
**Initializing a project in skyscript is not required, but it's always recommended, you can achieve it by doing**
```js
~ # ss init
Initialized, check 'skyscript.json' to configure your project!
~ # 
```
**The SkyScript Configuration file is limited for now, and it should look like this:**
```js
{
  "mode": "simple",
  "mods": [],
  "packages": [],
  "name": "Project"
}
```
**The Contents of the `skyscript.json` are the following**
- mode: the interpreter mode, used for loading functions, the available values are `simple, advanced, mixed`
- mods: SkyScript mods, these are packages used to extend the functionality and power of skyscript [using NodeJS] (coming soon)
- packages: SkyScript packages, these are packages used to add content and shorten code [using SkyScript] (coming soon)
- name: Project name, can be accessed in the code by `project.name`
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
```
# Fun

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
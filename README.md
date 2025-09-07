#### 1) What is the difference between var, let, and const?

Answer :- The difference between var, let, and const are in the table
............................................................................................................................................................
| Feature                      | `var`                                | `let`                              | `const`                           
............................................................................................................................................................
| **Scope**                    | Function-scoped                      | Block-scoped (`{}`)                | Block-scoped (`{}`)               
| **Hoisting**                 | ✅ Yes (initialized as `undefined`) | ✅ Yes (but in Temporal Dead Zone) | ✅ Yes (but in Temporal Dead Zone) 
| **Re-declaration**           | ✅ Allowed                          | ❌ Not allowed in same scope       | ❌ Not allowed in same scope       
| **Re-assignment**            | ✅ Allowed                          | ✅ Allowed                         | ❌ Not allowed                     
                             
      


#### 2) What is the difference between map(), forEach(), and filter()? 

Answer :- The difference between map(), forEach(), and filter() are in the table
.......................................................................................
| Method      | Returns New Array? | Modifies Original?  | Use Case 
.......................................................................................
| `forEach()` |  No                |  No                 | Side effects (e.g., logging) 
| `map()`     |  Yes               |  No                 | Transform array values       
| `filter()`  |  Yes               |  No                 | Select elements by condition 


#### 3) What are arrow functions in ES6?

Answer :- Arrow functions are a shorter, cleaner way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015).

### Key Features of Arrow Functions
):- Shorter syntax => More concise than function
):- Implicit return => Returns value automatically if no {} are used
):- No arguments object => Doesn’t have its own arguments


#### 4) How does destructuring assignment work in ES6?
Answer :- The destructuring assignment work in ES6 are-
    ## Array Destructuring const ([a, b, c] = [1, 2, 3];)
    ## Object Destructuring 
    ## Nested Destructuring
    ## Destructuring in Function Parameters

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Answer :- Template literals (also called template strings) were introduced in ES6 to make working with strings easier and more readable, especially when embedding variables or writing multi-line strings.

    ## Key Features of Template Literals
        # Interpolation => Easily embed variables and expressions with ${...}
        # Multi-line  => stringsWrite strings across multiple lines without \n
        # Expression support => Can evaluate expressions inside ${}
        # Tag functions => Advanced usage for custom string processing

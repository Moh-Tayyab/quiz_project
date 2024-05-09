import inquirer from "inquirer";

import chalk from "chalk";

// the quiz data
const quiz = [
  {
    question: "What is TypeScript?",
    choices: [
      "A) A CSS preprocessor",
      "B) A JavaScript framework",
      "C) A strongly typed programming language that builds on JavaScript",
      "D) A version of ECMAScript",
    ],
    correctAnswer:
      "C) A strongly typed programming language that builds on JavaScript",
  },
  {
    question: "Which company developed TypeScript?",
    choices: ["A) Facebook", "B) Microsoft", "C) Google", "D) Apple"],
    correctAnswer: "B) Microsoft",
  },
  {
    question: "Which of the following is a key feature of TypeScript?",
    choices: [
      "A) Static typing",
      "B) Dynamic typing",
      "C) Type erasure",
      "D) Prototypal inheritance",
    ],
    correctAnswer: "A) Static typing",
  },
  {
    question: "What TypeScript syntax would you use to define an enum?",
    choices: ["A) class", "B) interface", "C) enum", "D) package"],
    correctAnswer: "C) enum",
  },
  {
    question: "How do you declare a variable of type 'any' in TypeScript?",
    choices: [
      "A) var name: any",
      "B) var name: *",
      "C) var name: {}",
      "D) var name",
    ],
    correctAnswer: "A) var name: any",
  },
  {
    question:
      "Which option is the correct way to compile a TypeScript file to JavaScript?",
    choices: [
      "A) ts script.ts",
      "B) tsc script.ts",
      "C) compile script.ts",
      "D) typescript compile script.ts",
    ],
    correctAnswer: "B) tsc script.ts",
  },
  {
    question: "What is the output of 'tsc --version' in the terminal?",
    choices: [
      "A) The TypeScript compiler version",
      "B) The current TypeScript file version",
      "C) The TypeScript configuration settings",
      "D) The version of the JavaScript file produced",
    ],
    correctAnswer: "A) The TypeScript compiler version",
  },
  {
    question: "What does the 'interface' keyword define in TypeScript?",
    choices: [
      "A) A new class",
      "B) A custom type",
      "C) A data structure",
      "D) A function implementation",
    ],
    correctAnswer: "B) A custom type",
  },
  {
    question:
      "Choose the correct TypeScript syntax for making a property optional in an interface?",
    choices: [
      "A) propertyName: string?",
      "B) propertyName?: string",
      "C) propertyName: optional string",
      "D) propertyName:: string",
    ],
    correctAnswer: "B) propertyName?: string",
  },
  {
    question:
      "Which of the following access modifiers makes a class member accessible only within the class itself?",
    choices: ["A) public", "B) protected", "C) private", "D) internal"],
    correctAnswer: "C) private",
  },
  {
    question:
      "How do you annotate a variable with a custom type in TypeScript?",
    choices: [
      "A) let x: MyType",
      "B) let x = MyType",
      "C) let x as MyType",
      "D) let x -> MyType",
    ],
    correctAnswer: "A) let x: MyType",
  },
  {
    question:
      "In TypeScript, which character is used to separate function parameters from the function return type?",
    choices: ["A) :", "B) =>", "C) =", "D) ->"],
    correctAnswer: "B) =>",
  },
  {
    question:
      "What is the term for TypeScript's ability to infer the type of a variable, parameter, or return value?",
    choices: [
      "A) Type deduction",
      "B) Type assertion",
      "C) Type casting",
      "D) Type inference",
    ],
    correctAnswer: "D) Type inference",
  },
  {
    question:
      "Which of the following is NOT a valid tuple type declaration in TypeScript?",
    choices: [
      "A) let x: [string, number]",
      "B) let x: [string | number]",
      "C) let x: [string, number?]",
      "D) let x: (string | number)[]",
    ],
    correctAnswer: "B) let x: [string | number]",
  },
  {
    question: "What is the purpose of the 'never' type in TypeScript?",
    choices: [
      "A) To indicate a value will never occur",
      "B) To represent the absence of a value",
      "C) To declare a variable that will never change",
      "D) To define a variable without a type",
    ],
    correctAnswer: "A) To indicate a value will never occur",
  },
  {
    question:
      "Which of the following types is assignable to 'void' in TypeScript?",
    choices: ["A) null", "B) undefined", "C) 0", "D) '' (empty string)"],
    correctAnswer: "B) undefined",
  },
  {
    question: "What does the 'as' keyword do in TypeScript?",
    choices: [
      "A) Renames a variable",
      "B) Casts a variable to a different type",
      "C) Declares a new type alias",
      "D) Imports a module as a different name",
    ],
    correctAnswer: "B) Casts a variable to a different type",
  },
  {
    question:
      "How do you make all properties of a TypeScript interface readonly?",
    choices: [
      "A) prefix each property with 'readonly'",
      "B) enclose the interface in a 'readonly' block",
      "C) use the 'Readonly' utility type",
      "D) TypeScript interfaces are readonly by default",
    ],
    correctAnswer: "C) use the 'Readonly' utility type",
  },
  {
    question:
      "Which utility type constructs a type with all properties of Type set to optional?",
    choices: [
      "A) Partial<Type>",
      "B) Optional<Type>",
      "C) Nullable<Type>",
      "D) Soft<Type>",
    ],
    correctAnswer: "A) Partial<Type>",
  },
  {
    question:
      "What is the syntax to declare a class that implements an interface in TypeScript?",
    choices: [
      "A) class MyClass implements MyInterface {}",
      "B) class MyClass extends MyInterface {}",
      "C) class MyClass uses MyInterface {}",
      "D) class MyClass: MyInterface {}",
    ],
    correctAnswer: "A) class MyClass implements MyInterface {}",
  },
];

let score: number = 0;

for (let { question, choices, correctAnswer } of quiz) {
  let { userAnswer } = await inquirer.prompt({
    name: "userAnswer",
    type: "list",
    message: question,
    choices: choices,
  });

  if (userAnswer === correctAnswer) {
    console.log(chalk.bgGreenBright(chalk.black(`Correct!!`)));
    
    score++;
  } else {
    console.log(chalk.bgRedBright(chalk.black(`Incorrect!!`)));
    console.log(chalk.greenBright(chalk.bgCyan(`The Correct Answer is: ${correctAnswer}`)));
  }
}
console.log(chalk.bgBlueBright(chalk.magenta(`Your score is: 20/${score}`)));

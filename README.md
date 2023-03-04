# tsk-cl (tsk) 1.0

tsk is a command line todo list utility written in javascript.

This application was developed as a challenge for DevChallenge!

[Challenge Task List](https://github.com/stevescruz/Challenge-Task-List)

[DevChallenge](https://www.devchallenge.com.br/)

#

## Getting Started

Install tsk globally:

```
npm install tsk-cl -g

or

yarn global tsk-cl
```

Or you can add it to your projects dev dependencies:

```
npm install tsk-cl

or

yarn add tsk-cl
```

Then you can run it with:

```
npx tsk <coomand>
```

## How to use it

`tsk` will create a `.tasks` file on current folder. This is a simple JSON file stringfied.

### Create a new task

```
tsk add <task description> [-p <priority>]
```

**Examples**

```
tsk add create task registrer screen -p low

tsk add create a template to create new components -p high
```

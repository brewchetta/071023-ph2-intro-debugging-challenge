# Phase 2 React Debugging Challenge

This is an introductory debugging challenge to test your knowledge of React. You'll spend the majority of your time on this assignment debugging the code to make it work.

Once everything is working, there are some additional deliverables to complete including a bonus.

## Getting Started

Fork and clone the repository and open it with your editor. Run `npm install` in the repository followed by `npm start` in order to see the initial error messages.

You will only need to work with the files in `src`, the `package.json` and `public` files should work already. Additionally, you will not need to change `index.js`, `menuItemsArray.js`, or any `.css` files.

## Debugging

There are at least 10 bugs in the code. Some bugs are blocking and won't let you continue until you've fixed them. Others will allow the page to render but things will look... wrong.

Be sure to look at

- props and how they're being passed down
- imports and exports
- spelling
- how the array is being used

When you believe you're done you should be able to reload the page without it breaking or any `console.warn`s.

Tips:

- if you have an error message then be sure to **read the error** including the **line number**
- draw out your component tree so you know exactly what should be imported
- you can `console.log` the props in MenuItem, be sure to make no assumptions...
- you have to do something special to switch between javascript and jsx
- getting the correct year format for copyrite might require you to search

## --- BONUS ---

### New Component

Create a new component called `NutritionalInfo`. The new component has two paragraph tags like so:

```
<p>Calories:</p>
<p>XYZ</p>
```

Replace the XYZ with a random number between 100 and 2000. If done correctly, the number should randomly change every time you refresh the page.

The `NutritionalInfo` component is a child of the `MenuItem` component below the `<h3>name</h3>`.

### Map Over Array

Use the `.map` method to create a new MenuItem for each item in the `menuItemsArray` instead of hardcoding them by their index. It should now dynamically change if you add or remove items.

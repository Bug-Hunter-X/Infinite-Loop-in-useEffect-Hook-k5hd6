# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: creating an infinite loop within the `useEffect` hook by incorrectly including the state variable in the dependency array.  The `useEffect` hook is triggered on every state change, which causes the state to update continuously, leading to an infinite rendering loop and ultimately a crashed application.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Observe the continuously incrementing count in the browser console.

## Solution

The solution involves modifying the `useEffect` dependency array to prevent the infinite loop.  This ensures that `useEffect` only runs under certain conditions and not on every state change.

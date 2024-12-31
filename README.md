# Next.js Router.push Warning: Called before component mounts

This repository demonstrates a common Next.js warning: "Warning: Router.push called before component mounts".  The warning arises when `router.push()` is called within a component before the component's state has fully mounted.  This can lead to unexpected behavior and should be avoided.

## Problem

The `bug.js` file shows how calling `router.push()` within a component's `handleClick` function (without any conditional checks) before the component finishes mounting produces the warning. This is because the router object might not be fully initialized at that point.

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue using the `useEffect` hook and the `router.isReady` property. `useEffect` ensures that `router.push()` only runs after the component is mounted and ready. The `router.isReady` check provides an additional layer of safety, confirming the router is prepared before attempting navigation.
# tips, tricks, challenges, and resources for learning nextjs

* YouTube Videos
    * <https://www.youtube.com/watch?v=Sbl04kOL1dM&t=1s>

* when to use server component
    * fetch data
    * access backend resources (directly)
    * keep sensitive information on the server (access tokens, api keys, etc)
    * keep large dependencies on the server/reduce client-side javascript.

* when to use client component
    * add interactivity and event listeners (`onClick()`, `onChange()`, etc)
    * use state and lifecycle effects (useState, useReducer, useEffect, etc)
    * use browser-only apis
    * use custom hooks that depend on state, effects, or browser-only apis
# tips, tricks, challenges, and resources for learning nextjs

* YouTube Videos
    * <https://www.youtube.com/watch?v=Sbl04kOL1dM&t=1s>
    * <https://www.youtube.com/watch?v=bfFCnjAy_9s&t=16s>
    * <https://www.youtube.com/watch?v=YC6LqIYVHxI&t=11s>
    * <https://www.youtube.com/watch?v=UNwIUq9RJJk>

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

* vercel databases
    * postgres: <https://vercel.com/docs/storage/vercel-postgres>
    * blob: <https://vercel.com/storage/blob>
    * kv: <https://vercel.com/docs/storage/vercel-kv>
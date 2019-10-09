# `M001`: Realtime Search
The task is divided into different parts. Optional parts are not required
to do, but it's going to be ***a big plus*** for you.

### Requirements
+ ***`React`/`Vue`***
+ ***`Redux`/`Vuex`***
+ ***`TypeScript`***
+ ***`fetch` API***

### Deadline `5-7 days`

# FAQ
+ ***Can i use `rxjs`?*** - `Yes`
+ ***Can i use `redux middlewares` like `saga`, `thunk` and etc?*** - `Yes`
+ ***Can i use project generators like `create-react-app`*** - `Yes`
+ ***Can i use css frameworks like `bootstrap`?*** - `No`, but `normalize.css` is allowed.
+ ***Can i use other static site generators like `next.js`, `nuxt.js` and etc*** - `No`

# API
+ Official docs: https://github.com/typicode/json-server#full-text-search
+ URL: https://jsonplaceholder.typicode.com/posts
+ Query example: https://jsonplaceholder.typicode.com/posts?q=facere

---

### Part `1`
Create App that searches `posts` from `api` in `realtime` with `delay`.
All requests should be sent using the store.
+ Max search results count is `5`.
+ Delay should be around `200`-`500` ms.
+ Min query length for search is `3` unless the user presses `enter`.

### Part `2`
Design requirements shown in the [figma project](https://www.figma.com/file/ZmX8H1qMc8k5fivTHty6dH/Azimutlabs-Front-Developer-Tasks?node-id=35%3A0)

### Part `3`
###### Optional
Add query result highlighting both `title` and `body`.

+ ***Example 1:***
  - Query: `linux`
  - Result: ***Linux*** - Wikipedia

+ ***Example 2:***
  - Query: `lin`
  - Result: ***Lin***ux - Wikipedia

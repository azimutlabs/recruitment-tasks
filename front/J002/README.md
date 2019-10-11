# `J002`: REST API client
The task is divided into different parts. Optional parts are not required
to do, but it's going to be ***a big plus*** for you.

### Requirements
+ ***`React`/`Vue`***
+ ***`fetch` API***

### Deadline `2-3 days`

# FAQ
+ ***Can i use project generators like `create-react-app`*** - `Yes`
+ ***Can i use Typescript, Flow and etc?*** - `Yes`
+ ***Can i use state managers like Mobx, Redux and etc?*** - `Yes`
+ ***Can i use css frameworks like `bootstrap`?*** - `No`, but `normalize.css` is allowed.
+ ***Can i use other static site generators like `next.js`, `nuxt.js` and etc*** - `No`

# API
Here you can have some mock APIs to test out your features:
+ Official docs: https://github.com/typicode/json-server
+ URL: https://jsonplaceholder.typicode.com

---

### Part `1`
Create App that fetches the url that was inserted by the user.
Response body MUST be JSON, so you can parse it and then render in the json viewer.

### Part `2`
Design requirements shown in the [figma project](https://www.figma.com/file/ZmX8H1qMc8k5fivTHty6dH/Azimutlabs-Front-Developer-Tasks?node-id=104%3A0)

### Part `3`
###### Optional
Add expander for json nodes, so nested body like this:
```json
1   {
2 <   "nested": {
3       "message": "nasty"
4     }
5   }
```
could be hidden using one of the `caret` buttons on the left side of the viewer:
```json
1   {
2 >   "nested": { ... }
3   }
```
Click on a hidden node (`3 dots`) or on `caret` will expand the `node` again:
```json
1   {
2 <   "nested": {
3       "message": "nasty"
4     }
5   }
```

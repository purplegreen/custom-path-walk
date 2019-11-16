# custom-path-walk

Is an App to compose and follow a custom guided walk. The App will allow the visitors to compose a guided walk and customize it on their personal wishes choosing among a number of different slots. As for exhample the walk can be composed obtaining a relaxing slow pace, or by putting together a rytmathic flow.

### start mongodb

```
brew services start mongodb-community
```

```
brew services restart mongodb-community
```

### start

```
nodemon index.js
```

### You are set on

```
http://localhost:3000
```

```
http://localhost:3000/walkpath/all
```

```
http://localhost:3000/visitors/all
```

```
http://localhost:3000/slots/all

```

### With AXIOS ======

### visitor create a new walkpath

```
axios.post('http://localhost:3000/visitors/:id/walkpaths', { walkpath:id }).then(console.log)
```

### slots are added to composition

```
axios.post('http://localhost:3000/walkpath/:id/composition', { slot:id }).then(console.log)
```

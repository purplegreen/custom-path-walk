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

### Create a new Visitor

```
axios.post('http://localhost:3000/visitors', {name: String, mood:String, walkpaths: [] }).then(console.log)
```

### Create a new Walkpath

```
axios.post('http://localhost:3000/walkpath', {name: String, composition: []}).then(console.log)
```

### Create a new Slot

axios.post('http://localhost:3000/slots', {name: String, tipology: String, category: String, flow: string, duration: Number }).then(console.log)

### visitor create a new walkpath

```
axios.post('http://localhost:3000/visitors/:id/walkpaths', { walkpath:id }).then(console.log)
```

### slots is added to walkpath composition

```
axios.post('http://localhost:3000/walkpath/:id/composition', { slot:id }).then(console.log)
```

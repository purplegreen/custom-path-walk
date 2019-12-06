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
axios.post('http://localhost:3000/visitors', {name: Mina, mood:rusted, walkpaths: [] }).then(console.log)
```

### Create a new Walkpath

```
axios.post('http://localhost:3000/walkpath', {name: Along the Shore, composition: [ { slot:id } ]}).then(console.log)
```

### Create a new Slot

```
axios.post('http://localhost:3000/slots', { name: 'Marine Life',
    tipology : "floating",
    category : "observation",
    flow : "very slow",
    duration: "19"}).then(console.log)
```

### Visitor create a new walkpath

```
axios.post('http://localhost:3000/visitors/:id/walkpaths', { walkpath:id }).then(console.log)
```

### Slot added to walkpath composition

```
axios.post('http://localhost:3000/walkpath/:id/composition', { slot:id }).then(console.log)
```

### Delete

```
axios.delete('http://localhost:3000/walkpath/:id').then(console.log);

```

```
axios.delete('http://localhost:3000/visitors/:id').then(console.log);
```

```
axios.delete('http://localhost:3000/slots/:id').then(console.log);
```

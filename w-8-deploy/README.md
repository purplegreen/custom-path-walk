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
axios.post('http://localhost:3000/visitors', {name:'Mina', mood:'rusted', walkpaths: [] }).then(console.log)
```

### Create a new Walkpath

```
axios.post('http://localhost:3000/walkpath', {name: 'Along the Shore', composition: [ { slot:id } ]}).then(console.log)
```

```
example
```

```
axios.post('http://localhost:3000/walkpath', {name: 'Silvery Sand', composition: ['5de914ed69efb4095f2d2b7e', '5de9119269efb4095f2d2b7a', '5de8dfdb3d21b807ad977c5f'], composers: ['5ddb9e174ed21c03eb8b84a7']}).then(console.log)
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

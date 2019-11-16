# custom-path-walk

Is an App to compose and follow a custom guided walk.

The App will be presented in the context of the exhibition Ruhr Ding: Klima at Silbersee II in Haltern am See, Germany.

The visitors of the outdoor exhibition will be able to compose a personalized walk around the Silbersee lake. The personalized walkpath will be composed with a number of different slots. The slots can be choosen according to the charactheristics they present, like: Typology ( walk, seat, float, breathe), Category (landscape observation, introspection), Flow (relaxing, invigorating), Duration (in minutes).

The App will allow the visitors to compose a guided walk and customize it on their personal wishes. As for exhample the walk can be composed obtaining a relaxing slow pace, or by putting together a rytmathic flow. So that expert walker, older people, meditative types, or kids for example can all tailor their experience.

start # mongodb
brew services start mongodb-community
brew services restart mongodb-community

http://localhost:3000/walkpath/all

http://localhost:3000/visitors/all

http://localhost:3000/slots/all

With axios ======

visitor create a new walkpath
axios.post('http://localhost:3000/visitors/:id/walkpaths', { walkpath:id}).then(console.log)

slots are added to composition
axios.post('http://localhost:3000/:id/composition', { slot:id}).then(console.log)

var movies = [
	{
    	id: 1,
    	title: 'James Bond',
    	desc: 'about British spy',
    	image: src=('image1.jpg')
 	},
 	{
    	id: 2,
    	title: 'Pretty woman',
    	desc: 'romantic comedy',
    	image: src=('image2.jpg')
	},
 	{
  		id: 3,
  		title: 'Pippi Longstocking',
  		desc: 'the beloved story of a spunky young girl',
  		image: src=('image3.png')
	},
	{
		id: 4,
		title: 'Jaws',
		desc: 'thriller about a giant man-eating great white shark',
		image: src=('image4.jpg')
	}
]

var moviesElement = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image})
	)
})
var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'lista filmow'),
		React.createElement('ul', {}, moviesElement)
	)
ReactDOM.render(element, document.getElementById('app'))

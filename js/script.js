var movies = [
	{
    	id: 1,
    	title: 'James Bond',
    	desc: 'about British spy',
    	image: src=('images/image1.jpg')
 	},
 	{
    	id: 2,
    	title: 'Pretty woman',
    	desc: 'romantic comedy',
    	image: src=('images/image2.jpg')
	},
 	{
  		id: 3,
  		title: 'Pippi Longstocking',
  		desc: 'the beloved story of a spunky young girl',
  		image: src=('images/image3.png')
	},
	{
		id: 4,
		title: 'Jaws',
		desc: 'thriller about a giant man-eating great white shark',
		image: src=('images/image4.jpg')
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
		React.createElement('h1', {}, 'my favorite movies'),
		React.createElement('ul', {}, moviesElement)
	)
ReactDOM.render(element, document.getElementById('app'))

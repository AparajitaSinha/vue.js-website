Vue.component('movie-detail',{
	props:['movie'],

	template:
<div>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{movie.Title}}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
   </div>
</div>
});

new Vue({
	el:"#mymovieapp",
	data:{
		searchKey:'',
		moviesList:[]
	},
	methods:{
		searchMovies()
		{
			var url='https://www.themoviedb.org/'+this.searchKey+'91dd64b2b337b5582884e3467617aa0c';
			fetch(url)
			.then(response=>response.json())
			.then(data=>{
				this.moviesList=data;
			})

		}
	}
})
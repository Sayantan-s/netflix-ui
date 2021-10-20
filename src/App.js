import Layout from 'components/layout';
import { Home, Movie, Movies, MyList, NewPopular, TvShows } from 'pages';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/tvshows" component={TvShows} />
                <Route path="/newpopular" component={NewPopular} />
                <Route path="/mylist" component={MyList} />
            </Switch>
        </Layout>
    );
}

export default App;

//https://api.themoviedb.org/3/movie/550?api_key=

//COMMING NEXT WEEK --> /movie/upcoming
//NEW ON NETFLIX --> /movie/now_playing
//COMING THIS WEEK --> /trending/all/week
//SIMILAR MOVIE --> /movie/{movie_id}/similar

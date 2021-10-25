import { Stack } from 'components/library';
import { MovieDetailRows } from 'components/ui/pages/NewPopular';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request_handler } from 'store/actions/http_request.action';
import { FETCH_MOVIES } from 'store/action-types';

const NewPopular = () => {
    const dispatch = useDispatch();

    const {
        COMING_NEXT_WEEK: comingNextWeekState,
        COMING_THIS_WEEK: comingThisWeekState,
        NEW_ON_NETFLIX: newOnNetflixState
    } = useSelector((state) => state.movies);

    useEffect(() => {
        if (
            !comingNextWeekState.data?.results &&
            !comingThisWeekState.data?.results &&
            !newOnNetflixState.data?.results
        ) {
            dispatch(
                request_handler({
                    url: '/movie/upcoming',
                    loading_type: FETCH_MOVIES.COMING_NEXT_WEEK.LOADING,
                    success_type: FETCH_MOVIES.COMING_NEXT_WEEK.SUCCESS,
                    error_type: FETCH_MOVIES.COMING_NEXT_WEEK.ERROR
                })
            );
            dispatch(
                request_handler({
                    url: '/trending/all/week',
                    loading_type: FETCH_MOVIES.COMING_THIS_WEEK.LOADING,
                    success_type: FETCH_MOVIES.COMING_THIS_WEEK.SUCCESS,
                    error_type: FETCH_MOVIES.COMING_THIS_WEEK.ERROR
                })
            );

            dispatch(
                request_handler({
                    url: '/movie/now_playing',
                    loading_type: FETCH_MOVIES.NEW_ON_NETFLIX.LOADING,
                    success_type: FETCH_MOVIES.NEW_ON_NETFLIX.SUCCESS,
                    error_type: FETCH_MOVIES.NEW_ON_NETFLIX.ERROR
                })
            );
        }
    }, []);

    return (
        <Stack direction="vertical" spacing={1} isLayout>
            <MovieDetailRows heading="New on Netflix" state={newOnNetflixState} />
            <MovieDetailRows heading="Coming This Week" state={comingThisWeekState} />
            <MovieDetailRows heading="Coming Next Week" state={comingNextWeekState} />
        </Stack>
    );
};

export default NewPopular;

//COMMING NEXT WEEK --> /movie/upcoming
//NEW ON NETFLIX --> /movie/now_playing
//COMING THIS WEEK --> /trending/all/week
//SIMILAR MOVIE --> /movie/{movie_id}/similar

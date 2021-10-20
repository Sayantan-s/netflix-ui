import { Stack } from 'components/library';
import { MovieDetailRows } from 'components/ui/pages/NewPopular';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request_handler } from 'store/actions/http_request.action';
import styled from 'styled-components';

const NewPopular = () => {
    const dispatch = useDispatch();

    const { response } = useSelector((state) => state);

    useEffect(() => {
        dispatch(request_handler({ url: '/movie/now_playing' }));
    }, []);

    console.log(response.data?.results);

    return (
        <StyledNewAndPopular direction="vertical" spacing={2}>
            <MovieDetailRows heading="New on Netflix" data={response.data?.results} />
            <MovieDetailRows heading="Coming This Week" data={response.data?.results} />
            <MovieDetailRows heading="Coming Next Week" data={response.data?.results} />
        </StyledNewAndPopular>
    );
};

export default NewPopular;

const StyledNewAndPopular = styled(Stack)`
    max-width: calc(192rem - (192rem - ${(props) => props.theme.sizes.xxl}) / 2);
    float: right;
    width: 100%;
`;

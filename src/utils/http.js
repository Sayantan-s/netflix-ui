const http = async ({ url = '', options }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_APP_DB_API_KEY}`,
        {
            ...(options && options),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
            }
        }
    );

    return res.json();
};

export default http;

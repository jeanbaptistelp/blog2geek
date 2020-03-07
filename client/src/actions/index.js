import request from '..api/config';



// fetching posts

export const fetchPostsList = () => async dispatch => {
    const response = await request.get('/posts'); 

    console.log(response)

     dispatch({
            type : 'FETCH_POSTS', 
            payload : response.data
        })
}
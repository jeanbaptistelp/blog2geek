import request from '../api/config'


request.get('/posts')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  });

  request.post('/posts', {
    title : 'A title from axios',
    description : 'une description utile'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  
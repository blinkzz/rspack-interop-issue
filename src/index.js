import axios from 'axios';

axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
  .then(response => response.data)
  .then(console.log)
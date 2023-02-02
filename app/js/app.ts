import axios from 'axios';

const greeting: string = 'Hello World!';
alert(greeting);

const res = axios.get<boolean>('')

res.then(body => console.log(body))
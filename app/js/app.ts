import axios from 'axios';
import { MQTTSubject } from 'musquette'

const greeting: string = 'Hello World!';
alert(greeting);

const res = axios.get<boolean>('')

res.then(body => console.log(body))

const m = new MQTTSubject('') 
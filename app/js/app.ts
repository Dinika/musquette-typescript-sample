import { MQTTSubject } from 'musquette';

const greeting: string = 'Hello World!';
alert(greeting);

const m = new MQTTSubject('ws://localhost:8080')

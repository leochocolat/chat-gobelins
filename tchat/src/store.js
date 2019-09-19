/* eslint-disable */
import Vue from 'vue';
import router from './router';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
// const socket = io('https://bddi-2019-chat.herokuapp.com/');

socket.on('connect', () => {

    const sessionUser = sessionStorage.getItem('user');
    if (sessionUser) {
        store.registerUser(JSON.parse(sessionUser).username);
    }

    socket.on('user registered', (user) => {
        store.user = user;
        store.isRegistered = true;
        sessionStorage.setItem('user', JSON.stringify(user));
    });

    socket.on('users update', ({users}) => {
        store.users = users;
    });

    socket.on('message new', ({message, messages}) => {
        let newArray = messages.slice(store.messages.length - 1);
        for (let i = 0; i < newArray.length; i++) {
            newArray[i].style = store.getRandomStyle();
            store.messages.push(newArray[i]);
        }
    });

    socket.on('message update', ({messages}) => {
        let newArray = messages.slice(store.messages.length - 1);
        for (let i = 0; i < newArray.length; i++) {
            newArray[i].style = store.getRandomStyle();
            store.messages.push(newArray[i]);
        }
    });

    socket.on('command new', (msg) => {
        console.log('command new', msg)
    });

    socket.on('chat error', ({ code, message }) => {
        console.error(`error ${code}: ${message}`);
    });
});

const store = new Vue({
  data: {
        user: {
            name: null,
            avatar: '',
        },
        users: [],
        messages: [],
        isRegistered: false
    },
    watch: {
        isRegistered () {
            console.log('isRegistered Update', this.isRegistered);
            if (this.isRegistered) {
                router.push('/')
            } else {
                router.push('/login')
            }
        }
    },
    methods: {
        registerUser(name) {
            socket.emit('user register', {
                username: name,
                avatar: ''
            });
        },
        sendMessage(message) {
            socket.emit('message new', message);
        },
        logout() {
            sessionStorage.clear();
            socket.disconnect();
            router.push('/login')
        },
        getRandomStyle() {
            let viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            let newPosition = {
                x: Math.random() * (viewport.width/2 + viewport.width/2) - viewport.width/2,
                y: Math.random() * (viewport.height/2 + viewport.height/2) - viewport.height/2,
            }
            let classes = [
                "class1",
                "class2",
                "class3",
                "class4",
                "class5",
                "class6",
                "class7",
                "class8",
                "class9",
                "class10",
            ];

            let random = parseInt(Math.random() * classes.length);

            return {
                position: newPosition,
                className: classes[random]
            };
        }
    },
});

export default store;
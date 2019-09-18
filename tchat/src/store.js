/* eslint-disable */

import Vue from 'vue';
import router from './router';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    socket.on('user registered', (user) => {
        store.user = user;
        store.isRegistered = true;
    });
    socket.on('users update', ({users}) => {
        store.users = users;
    });
    socket.on('message new', ({message, messages}) => {
        if (messages.length > store.messages.length) {
            store.messages = messages;
        } else {
            store.messages.push(message);
        }
    });
    socket.on('command new', (msg) => {
        console.log('command new', msg)
    });
});

const store = new Vue({
  data: {
        user: {
            name: null,
            avatar: '',
        },
        users: [
            {
                username: 'Booba',
            },
            {
                username: 'Nekfeu',
            }
        ],
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
        }
    }
});

export default store;
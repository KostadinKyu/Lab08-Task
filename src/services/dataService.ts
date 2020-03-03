import axios from 'axios';
import * as Constants from '../common/constants';
import { ThreadsData } from '../models/threadsData';
import { ThreadModel } from '../models/threadModel';

// import * as server from '@types/json';
//const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

export class dataService {
    constructor(lang?) {
        axios.defaults.baseURL = `${Constants.apiUrl}/`;
        axios.defaults.headers = {
            "Content-Type": "application/json; charset=utf-8",
            Pragma: 'no-cache',
        }
        //const server = jsonServer.create();
        //const router = jsonServer.router('db.json');
        //const middlewares = jsonServer.defaults();
    }

    async getAllThreads1() {
        return await fetch("http://localhost:3000/threads")
            .then(res => res.json())
            .then(result => result)
            .catch(error => {
                Promise.reject(error)
                return -1;
            });
    }

    async getAllThreads(): Promise<Array<ThreadsData>> {
        return axios({
            url: `threads/`,
            method: 'get', headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(res => res.data)
            .then(result => {
                let res = new Array<ThreadsData>();
                result.forEach(r => {
                    let x = new ThreadsData();
                    x.threads = new Array<ThreadModel>();
                    r.forEach(element => {
                        x.threads.push(new ThreadModel(element.id, element.team, element.question, element.questionelement_id, element.threadelement_id, element.subjectelement_id, element.score, element.text, element.createdelement_at, element.subject));
                    });
                    res.push(x);
                });
                return res;
            })
            .catch(error => {
                Promise.reject(error)
                return new Array<ThreadsData>();
            })
    }

    async getAllThreadsData(): Promise<Array<ThreadModel>> {
        return axios({
            url: `threads/`,
            method: 'get', headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(res => res.data)
            .then(result => {
                let res = new Array<ThreadsData>();
                let res2 = new Array<ThreadModel>();
                result.forEach(r => {
                    let x = new ThreadsData();
                    x.threads = new Array<ThreadModel>();
                    r.forEach(element => {
                        x.threads.push(new ThreadModel(element.id, element.team, element.question, element.questionelement_id, element.threadelement_id, element.subjectelement_id, element.score, element.text, element.createdelement_at, element.subject));
                        res2.push(new ThreadModel(element.id, element.team, element.question, element.questionelement_id, element.threadelement_id, element.subjectelement_id, element.score, element.text, element.createdelement_at, element.subject));
                    });
                    res.push(x);
                });
                return res2;
            })
            .catch(error => {
                Promise.reject(error)
                return new Array<ThreadModel>();
            })
    }
}
export default dataService
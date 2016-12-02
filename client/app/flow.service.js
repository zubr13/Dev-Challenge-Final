'use strict';
const angular = require('angular');
const API_URL = 'http://localhost:3000/api';

/*@ngInject*/
export default class FlowService {
	constructor($http){
		this.$http = $http;
	}

	getFlows(){
		return this.$http.get(`${API_URL}/flows`)
		.then(response => response.data);
	}

	getFlow(id) {
		return this.$http.get(`${API_URL}/flows/${id}`)
		.then(response => response.data);
	}

	createFlow(flow){
		return this.$http.post(`${API_URL}/flows`, flow)
		.then(response => response.data);
	}

	saveFlow(flow){
		return this.$http.put(`${API_URL}/flows/${flow._id}`, flow)
		.then(response => response.data);
	}

	createEvent(flow, event) {
		return this.$http.put(`${API_URL}/flows/${flow}`, event)
		.then(response => console.log(response.data));
	}

	saveEventSign(eventAdd, user) {
		this.$http.get(`${API_URL}/flows`)
	}
}
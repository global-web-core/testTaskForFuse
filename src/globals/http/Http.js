import {API_URL, METHOD_HTTP} from '../constants/constants';
import axios from 'axios';

const fetchData = async (url, options) => {
	try {
		const response = await axios({ url, ...options });
		return { code: 200, data: response.data };
	} catch (error) {
		console.log('Error fetch with server!!!', error);
		return { code: 404, data: undefined };
	}
}

const requestGet = async (controller, method) => {
	const url = `${API_URL}/${controller}`;
	
	const options = {
		method,
		headers:{
			'Content-Type':'application/json'
		}
	};

	return fetchData(url, options);
};

const requestAdd = async (controller, method, data) => {
	const url = `${API_URL}/${controller}`;
	
	const options = {
		method,
		headers:{
			'Content-Type':'application/json'
		},
		data: JSON.stringify(data)
	};

	return fetchData(url, options);
};

const get = async (controller) => await requestGet(controller, METHOD_HTTP.get);
const add = async (controller, data) => await requestAdd(controller, METHOD_HTTP.post, data);



export {
	get,
	add,
};
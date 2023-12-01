import base from './base.js'

const endpoint = '/reserva'

const findAll = async () => await base.get(endpoint);

const create = async () => await base.post(endpoint, payload);

const api = {findAll, create};

export default api;
import axios from 'axios';

const url = 'https://re-server-seven.vercel.app/menu';

export const fetchMenuItems = () => axios.get(url);
export const createMenuItem = (newMenuItem) => axios.post(url, newMenuItem);
export const updateItem = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);
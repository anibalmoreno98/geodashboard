import axios from "axios";

const API = "http://localhost:4000";

export function getPoints() {
  return axios.get(`${API}/points`);
}

export function createPoint(data) {
  return axios.post(`${API}/points`, data);
}

export function updatePoint(id, data) {
  return axios.put(`${API}/points/${id}`, data);
}

export function deletePoint(id) {
  return axios.delete(`${API}/points/${id}`);
}

//  All erros need to put in front
// Libraries
import axiosClient from "../apiNews";

// GET all news
export async function getAllNews() {
  const res = await axiosClient.get("/");
  return res;
}

// GET news by id

export async function getAllUNewsById(id) {
    const res = await axiosClient.get(`/${id}`);
    return res;
  }

// Add news
export async function addNews(data) {
  const res = await axiosClient.post(`/addnews`, JSON.stringify(data));
  return res;
}


// update news by id
export async function updateUserById(data, id) {
  const res = await axiosClient
    .patch(`/updatenews/${id}`, JSON.stringify(data));
  return res;
}

// delete news by Id
export async function deleteNewsById(id) {
  const res = await axiosClient
    .delete(`/deletenews/${id}`);
  return res;
}

//login
export async function login(data) {
  const res = await axiosClient
    .post('/signin', JSON.stringify(data));
    return res;
}



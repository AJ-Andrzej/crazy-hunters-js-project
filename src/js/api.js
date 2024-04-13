import axios from "axios";


export async function getReviews() {
    const BASE_ERL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews';
    const url = `${BASE_ERL}${END_POINT}`;
    const res = await axios.get(url)
    return res.data
}

export async function postRequest(request) {
    const BASE_ERL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/requests';
    const url = `${BASE_ERL}${END_POINT}`;
    const res = await axios.post(url, request)
    return res.data
}
// example request data
// const req = {
//   email: "test@gmail.com",
//   comment: "User's comment"
// }
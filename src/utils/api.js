import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: "AIzaSyDnnTP4QaoWzW6fokQIVs8x3azNkTHZBVc",
    cx: "f150103680fcd4aa7"
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};

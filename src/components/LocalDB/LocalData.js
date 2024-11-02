import { toast } from "react-toastify";

const getStoreData = () => {
  // read list data
  const data = localStorage.getItem("read-list");
  if (data) {
    const newData = JSON.parse(data);
    return newData;
  } else {
    return [];
  }
};

const addDataDb = (id) => {
  const getData = getStoreData();
  if (getData.includes(id)) {
    console.log('data all ready exit');
  } else {
    getData.push(id);
    const newData = JSON.stringify(getData);
    localStorage.setItem("read-list", newData);
  }
};

export { addDataDb, getStoreData };

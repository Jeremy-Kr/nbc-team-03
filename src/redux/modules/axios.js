import axios from "axios";

// 컨텐츠 목록을 가져오는 비동기 함수
export const getContents = async () => {
  const response = await axios.get("http://localhost:3001/content");
  return response.data;
};

// ID로 컨텐츠를 조회하는 비동기 함수
export const getContentById = async (id) => {
  const response = await axios.get("http://localhost:3001/content");
  return response.data.find((item) => item.id === id);
  // return contents.find(item => item.id === id); // id로 찾아서 반환
};

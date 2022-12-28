import React from "react";
import { useDispatch } from "react-redux";
import useSearchInputRef from "../hooks/useSearchInputRef";
import { searchContents } from "../../redux/modules/contents";

const ContentSearch = () => {
  const dispatch = useDispatch();

  // //input에 대해 useRef로 ref값을 주는 커스텀 hook
  const [searchOptionRef, searchTextRef] = useSearchInputRef();
  const inputOption = searchOptionRef.current;
  const inputWord = searchTextRef.current;

  //onSubmit했을 때 추가되는 기능
  const handleSubmitForm = (event) => {
    event.preventDefault();

    // 값이 입력되지 않으면 alert창을 띄운다.
    if (!searchTextRef.current.value) {
      alert("검색어를 입력하세요");
    } else {
      // 검색어에 해당하는 내용띄우기
      dispatch(searchContents([inputOption.value, inputWord.value]));
      //입력이 완료되면 모든 input창의 값을 초기화 시킨다.
      searchTextRef.current.value = "";
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <select name="selectedOption" ref={searchOptionRef}>
          <option value="00">선택</option>
          <option value="nickname">작성자</option>
          <option value="contentTitle">제목</option>
          <option value="body">본문</option>
        </select>
        <input type="search" ref={searchTextRef} autoFocus={true}></input>
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default ContentSearch;

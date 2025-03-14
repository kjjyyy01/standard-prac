import Link from "next/link";
import React from "react";

const Detail = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Link style={{ backgroundColor: "lightblue" }} href="/todolist">
        전체리스트 화면으로 이동
      </Link>
      <h2>상세페이지</h2>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const MyPaymentHistoryDiv = styled.div`
  box-sizing: border-box;
  padding: 5rem 3rem 5rem 3rem;
  width: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
  background: linear-gradient(180deg, #ffffff -0%, #ffffff 100%);
  border-radius: 2rem;

  p{
    margin-bottom: 3rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Iceland,'Source Sans Pro';
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const Fillter = styled.div`
  box-sizing: border-box;
  padding: 0rem 0rem 1.5rem 44rem;
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Months = styled.div`
  margin-bottom: 0.5rem;
  height: 4rem;
  display: flex;
  column-gap: 2rem;
  align-items: center;
  flex-shrink: 0;

  div {
    width: 5rem;
    height: 50px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    background-color: #ececec;
    border-radius: 3rem;
    flex-shrink: 0;
  }

  div:hover {
    background-color: #9c9c9c;
    color: #ffffff;
    cursor: pointer;
  }

  div.active {
    background-color: #9c9c9c;
    color: #ffffff;
  }
`;

const Days = styled.div`
  //width: 100%;
  height: 3rem;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;

  p {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 400;
    color: #a9a8a8;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .datePicker {
    box-sizing: border-box;
    padding: 1rem;
    width: 9rem;
    border: solid 0.1rem #a9a8a8;
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
  }
`;

const HistoryListBox = styled.div`
  margin-bottom: 2rem;
  box-sizing: border-box;
  padding: 1rem 4rem;
  width: 100%;
  height: 7rem;
  border: solid 0.1rem #d9d9d9;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  flex-shrink: 0;

  .contentName {
    margin: 0rem 45.9rem 0.1rem 0rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    color: #000000;
    font-family: Inter, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .box1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .box2 {
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .contentName {
    display: flex;
    align-items: center;
    margin: 0rem 30rem 0rem 0rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    font-family: Inter, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .contentPrice {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #0d1eaf;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }

  .contentDate {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    font-family: Iceland, "Source Sans Pro";
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

function MyPaymentHistory(props) {
  const [hiCardHistory, setHiCardHistory] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    axios({
      method: "post",
      url: "/getHicardHistory.do",
      data: { memberId: "user3" },
    })
      .then((res) => {
        console.log(res.data);
        console.log("성공 성공 성공 성공 성공 성공");
        setHiCardHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("실패 실패 실패 실패 실패 실패");
      });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

  // startDate와 endDate 사이에 있는 hiCardHistory만 필터링
  const filteredHistory = hiCardHistory.filter((item) => {
    const historyDate = new Date(item.cardHistoryDate);
    return historyDate >= startDate && historyDate <= endDate;
  });

  // 클릭된 버튼에 따라 startDate와 endDate 설정
  const handleMonthsButtonClick = (months) => {
    const currentDate = new Date();
    const newStartDate = new Date(currentDate);
    newStartDate.setMonth(currentDate.getMonth() - months);

    setStartDate(newStartDate);
    setEndDate(currentDate);
    setActiveButton(months);
  };

  return (
    <MyPaymentHistoryDiv>
      <p>나의 결제 이력</p>
      <Fillter>
        <Months>
          <div
            onClick={() => handleMonthsButtonClick(3)}
            className={activeButton === 3 ? "active" : ""}
          >
            3개월
          </div>
          <div
            onClick={() => handleMonthsButtonClick(6)}
            className={activeButton === 6 ? "active" : ""}
          >
            6개월
          </div>
          <div
            onClick={() => handleMonthsButtonClick(12)}
            className={activeButton === 12 ? "active" : ""}
          >
            12개월
          </div>
        </Months>
        <Days>
          <ReactDatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            minDate={new Date("2000-01-01")} // 선택 가능한 최소 날짜 설정
            startDate={startDate}
            endDate={endDate}
            className="datePicker"
            showYearDropdown // 연도 드롭다운 표시
            scrollableYearDropdown // 연도 드롭다운 스크롤 가능하도록 설정
          />
          <p>-</p>
          <ReactDatePicker
            dateFormat="yyyy/MM/dd"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            minDate={new Date("2000-01-01")} // 선택 가능한 최소 날짜 설정
            startDate={startDate}
            endDate={endDate}
            className="datePicker"
            showYearDropdown // 연도 드롭다운 표시
            scrollableYearDropdown // 연도 드롭다운 스크롤 가능하도록 설정
          />
        </Days>
      </Fillter>

      {filteredHistory.map((board, index) => {
        // board.cardHistoryDate를 Date 객체로 파싱
        const date = new Date(board.cardHistoryDate);

        // 날짜 추출
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 +1을 해줘야 함
        const day = String(date.getDate()).padStart(2, "0");

        // YYYY-MM-DD 형식으로 조합
        const dateString = `${year}-${month}-${day}`;

        // 시간 추출
        const timeString = date.toTimeString().split(" ")[0]; // 시간

        return (
          <HistoryListBox key={index}>
            <div className="box1">
              <div className="box2">
                <p className="contentName">{board.cardHistoryStore}</p>
                <p className="contentPrice">{board.cardHistoryAmount}원</p>
              </div>

              {/* 추출한 날짜와 시간 출력 */}
              <p className="contentDate">
                {dateString} {timeString}
              </p>
            </div>
          </HistoryListBox>
        );
      })}
    </MyPaymentHistoryDiv>
  );
}

export default MyPaymentHistory;

import styled from "styled-components";

export const MyDataBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background-size: auto 100%;
  background: linear-gradient(
    176deg,
    #152592 0.08%,
    #141414 0.09%,
    #6c6c6c 46.04%,
    #1a1f40 100%
  );
`;
export const LimitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto;
  width: 1116px;
  justify-content: center;
  margin-top: ${(props) => (props.isFirst ? "15rem" : "1rem")};
  position: relative;
  margin-bottom: ${(props) => (props.isLast ? "15rem" : "1rem")};
`;
export const LimitDiv = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(215, 215, 215, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
  display: flex;
  width: 250px;
  height: 230px;
  min-width: 320px;
  min-height: 200px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

export const SaleForMonth = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6a6a6a3b;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 24px;
  }
  display: flex;
  width: 564px;
  height: 477px;
  min-height: 400px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(
    123deg,
    #fff 1.92%,
    rgba(255, 255, 255, 0.99) 22.96%,
    rgba(255, 255, 255, 0.98) 34.98%,
    rgba(215, 215, 215, 0.97) 51.89%,
    rgba(255, 255, 255, 0.96) 59.4%,
    rgba(255, 255, 255, 0.99) 77.06%
  );
`;

export const CompareLastMonth = styled.div`
  display: flex;
  width: 471px;
  height: 474px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(236, 236, 236, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
`;

export const CategoryGraph = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(215, 215, 215, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
  width: 1155px;
  height: 477px;
  flex-shrink: 0;
`;

export const MyDataTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  top: 11rem;
  position: relative;
`;

export const DataTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const DataView = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -2px;
`;

export const DataDesc = styled.div`
  color: #454545;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const CardDataList = styled.div`
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const CardInfoDesc = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  cursor: pointer;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 2px 2px 0px lightgray;
  }
`;

export const SemiCard = styled.img`
  width: 57.146px;
  height: 69.795px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #fff;
`;

export const CardLimitImage = styled.img`
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #fff;
  width: 90px;
  height: 120px;
  background: #000;
`;
export const CardSemiPic = ({ image }) => {
  return <SemiCard src={image} alt="Card Image" />;
};

export const CardLimitPic = ({ image }) => {
  return <CardLimitImage src={image} alt="Limit Card" />;
};

export const CardName = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const MonthHeading = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Sorting = styled.div`
  color: #454545;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const LImage = styled.img`
  width: 117px;
  height: 99px;
`;
export const LevelPic = ({ level }) => {
  return <LImage src={level} alt="Level" />;
};

export const LevelTitle = styled.p`
  color: #700002;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: -0.5px;
`;

export const LevelDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ForNow = styled.div`
  display: flex;
  height: 68px;
  padding: 12px 120px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #eaeaea;
  font-weight: bold;
  color: #7a7a7a;
  flex-direction: column;
`;

export const ToNext = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  position: relative;
  margin: 0 auto;
`;

export const ToNextSub = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: center;
  position: relative;
  margin: 0 auto;
`;

export const DataViewZone = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PercentZone = styled.div`
  display: flex;
  width: 610px;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const PercentBox = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Gray-200, #f2f2f2);
  background: #fff;
  display: flex;
  padding: 12px 179px 12px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
`;

export const Ptitle = styled.p`
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #7a7a7a;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.5px;
`;

export const PData = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
`;

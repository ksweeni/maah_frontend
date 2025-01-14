import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiCardModal, ModalClose } from "../HiCard/HiCard";
import MyHiCardAccountChange from "../HiCard/MyHiCardAccountChange";
import close from "../../assets/images/close.png";
import bronzeImg from "../../assets/images/Grade/bronze.png";
import silverImg from "../../assets/images/Grade/silver.png";
import goldImg from "../../assets/images/Grade/gold.png";
import platinumImg from "../../assets/images/Grade/platinum.png";
import VirtualCardApply from "../HiCard/VirtualCardApply";
import MyPaymentHistory from "../HiCard/MyPaymentHistory";
import { Link } from "react-router-dom";

export const MyCardListDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #fffdfd -0%, #b2b2b2 100%);
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 15rem;
`;

export const HiCardBox = styled.div`
  margin: 0rem 0rem 12rem 5rem;
  box-sizing: border-box;
  padding: 3.9rem 5.5rem 7.5rem 4.8rem;
  height: 38.8rem;
  display: flex;
  align-items: center;
  background: linear-gradient(
    280.43deg,
    #ffffff 18.1%,
    rgba(219, 219, 219, 0.5180130601) 47.23%,
    rgba(255, 255, 255, 0) 78.54%
  );
  border-radius: 3rem;
  width: 90%;
`;

export const MyHiCardLeftDiv = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
  width: 22.8rem;
  height: 100%;
  flex-shrink: 0;
`;

export const MyHiCardShape = styled.div`
  margin-bottom: 2rem;
  box-sizing: border-box;
  padding: 1.3rem 4.9rem 1.2rem 5rem;
  width: 100%;
  height: 21.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url("REPLACE_IMAGE:152:2759"); */
`;

// export const HiCard = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
//   box-sizing: border-box;
//   background-color: #ffffff;
//   border-radius: 1.2rem;
// `;

export const HiCardName = styled.p`
  position: relative;
  font-size: 3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.076rem;
  color: #000000;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 0.7rem;
`;

export const HiCardDescription = styled.div`
  width: 12.5rem;
  height: 2.2rem;
  position: absolute;
  left: -0.884rem;
  top: 15.5423rem;
  text-align: right;
  display: flex;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2775;
  letter-spacing: -0.068rem;
  color: #ffffff;
  /* font-family: Space Grotesk, "Source Sans Pro"; */
  white-space: nowrap;
`;

export const HiCardNoise = styled.div`
  opacity: 0.06;
  width: 12.9rem;
  height: 19rem;
  position: absolute;
  left: 0;
  top: 0;
  /* background-image: url("../assets/noise-vow.png"); */
  background-repeat: repeat;
  background-size: 100%;
`;

export const HiCardNumber = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
`;

export const MyHiCardCenterDiv = styled.div`
  margin: 7rem 2rem 4.8rem 0rem;
  width: 28.5rem;
  flex-shrink: 0;
  border-right: solid 0.1rem #000000;
`;

export const CardTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.2rem;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
`;
export const HiCardLimit = styled.div`
  margin-bottom: 2.7rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HiCardLimitTitle = styled.div`
  margin-right: 2rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const HiCardAmout = styled.div`
  text-align: right;
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const NotByCardAmout = styled.div`
  text-align: right;
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const HiCardUse = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HiCardUseTitle = styled.div`
  margin-right: 2rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #930000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const NotByCardUseTitle = styled.div`
  margin-right: 3rem;
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: black;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const MyHiCardRightDiv = styled.div`
  margin-top: 3.3rem;
  width: 33rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const HiCardInfo = styled.div`
  box-sizing: border-box;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const CardPoint = styled.div`
  margin: 0rem 0.1rem 2rem 0rem;
  width: calc(100% - 0.1rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CardPointTitle = styled.div`
  margin-right: 6rem;
  display: flex;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const CardPointScore = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const HiCardGrade = styled.div`
  margin-right: 0.8rem;
  width: calc(100% - 0.8rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const HiCardGradeTitle = styled.div`
  margin-right: 3rem;
  display: flex;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 0.6111111111;
  letter-spacing: -0.018rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const HiCardGradeImage = styled.img`
  width: 9rem;
  height: 6rem;
  object-fit: cover;
  vertical-align: top;
  flex-shrink: 0;
`;

export const BottomButtonDiv = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const LinkButton = styled.button`
  margin-bottom: 1rem;
  width: 28rem;
  height: 5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.036rem;
  color: #ffffff;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(188, 185, 179, 0.8539999723) -0%,
    rgba(177, 172, 148, 0.9720500112) 34%,
    rgba(130, 127, 116, 0.8700000048) 98%
  );
  border-radius: 0.5rem;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

export const ButtonUnderLine = styled.div`
  margin: 0rem 0rem 0rem 13.5rem;
  width: calc(100% - 13rem);
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & > p:hover {
    text-shadow: 0px 1px 9px #0000004f;
  }
`;

export const AccountChange = styled.p`
  margin-right: 3rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.026rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
`;

export const TempCardNumber = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.026rem;
  color: #000000;
  white-space: nowrap;
  flex-shrink: 0;
  position: absolute;
  left: 65rem;
  cursor: pointer;
`;

export const LostCard = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.026rem;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 1px 9px #0000004f;
  }
`;

export const ByCardGroup = styled.div`
  margin: 0rem 0rem 95.701rem 0rem;
  width: 100%;
  row-gap: 7.6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ByCardBox = styled.div`
  box-sizing: border-box;
  padding: 3.3rem 9.6rem 5.6rem 5.2rem;
  width: 90%;
  height: 32.4rem;
  background: linear-gradient(
    280.43deg,
    #ffffff 18.1%,
    rgba(219, 219, 219, 0.5180130601) 47.23%,
    rgba(255, 255, 255, 0) 78.54%
  );
  border-radius: 3rem;
  flex-shrink: 0;
`;

export const NotByCardBox = styled.div`
  box-sizing: border-box;
  padding: 3.3rem 9.6rem 5.6rem 5.2rem;
  width: 90%;
  height: 32.4rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3rem;
  flex-shrink: 0;
`;

export const MyByCardLeftDiv = styled.div`
  width: 15.4rem;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 2rem;
`;

export const MyByCardShape = styled.div`
  margin-bottom: 1.7rem;
  box-sizing: border-box;
  padding: 0.9rem 3.3rem 0.8rem 3.4rem;
  width: 100%;
  height: 14.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url("REPLACE_IMAGE:152:2124"); */
  flex-shrink: 0;
`;

export const ByCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000000;
  border-radius: 1.2rem;
`;

export const ByCardNoise = styled.div`
  opacity: 0.06;
  width: 8.7rem;
  height: 12.8rem;
  position: absolute;
  left: 0;
  top: 0;
  /* background-image: url("../assets/noise-Fcy.png"); */
  background-repeat: repeat;
  background-size: 100%;
`;

export const ByCardDescription = styled.div`
  width: 12.5rem;
  height: 2.2rem;
  position: absolute;
  left: -4.6915rem;
  top: 9.777rem;
  text-align: right;
  display: flex;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2775;
  letter-spacing: -0.068rem;
  color: #ffffff;
  /* font-family: Space Grotesk, "Source Sans Pro"; */
  white-space: nowrap;
`;

export const ByCardName = styled.div`
  width: 7.7rem;
  height: 1.9rem;
  position: absolute;
  left: 0.8208rem;
  top: 0.8205rem;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.076rem;
  color: #ffffff;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
`;

export const ByCardNumberPart = styled.div`
  margin: 0 2.75rem;
  width: calc(100% - 5.5rem);
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const ByCardNumberName = styled.div`
  margin-bottom: 0.7rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.3333333333;
  color: #000000;
  /* font-family: Iceland, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ByCardNumber = styled.div`
  margin-right: 0.9rem;
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const MyByCardInfoSection = styled.div`
  box-sizing: border-box;
  padding: 3.2rem 0rem 0.2rem 7.5rem;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
`;

export const MyByCardCenterDiv = styled.div`
  margin-right: 3rem;
  width: 29.2rem;
  height: 100%;
  position: relative;
  flex-shrink: 0;
`;

export const ByCardBenefitContents = styled.div`
  box-sizing: border-box;
  padding-top: 5.5rem;
  width: 29.5rem;
  height: 19.2rem;
  position: absolute;
  left: 0;
  /* top: 0.9rem; */
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  border-right: solid 0.1rem #000000;
`;

export const NotByCardBenefitContents = styled.div`
  box-sizing: border-box;
  padding-top: 4.5rem;
  width: 29.5rem;
  height: 19.2rem;
  position: absolute;
  left: 0;
  /* top: 0.9rem; */
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  border-right: solid 0.1rem #000000;
`;

export const ByCardBenefitDetail = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: #000000;
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ByCardBenefitCondition = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2125;
  color: rgba(0, 0, 0, 0.4099999964);
  /* font-family: Inter, "Source Sans Pro"; */
  white-space: nowrap;
  flex-shrink: 0;
`;

export const MyByCardRightDiv = styled.div`
  margin: 5.5rem 0rem 2.2rem 0rem;
  width: 36.5rem;
  height: calc(100% - 7.7rem);
  flex-shrink: 0;
`;

export const MyByCardAllSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MyCardListHiSection = () => {
  const [myCardHi, setMyCardHi] = useState({});

  const getMyHiCard = () => {
    axios({
      url: "/getMyCardListHi.do",
      method: "post",
      data: { memberId: "user2" },
    })
      .then((res) => {
        //console.log(res.data);
        setMyCardHi(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  useEffect(() => {
    getMyHiCard();
  }, []);

  return (
    <HiCardBox>
      <MyHiCardLeftSection myCardHi={myCardHi}></MyHiCardLeftSection>
      <MyHiCardCenterSection myCardHi={myCardHi}></MyHiCardCenterSection>
      <MyHiCardRightSection myCardHi={myCardHi}></MyHiCardRightSection>
    </HiCardBox>
  );
};

export const MyCardListBySection = () => {
  const [myCardListBy, setMyCardListBy] = useState({});
  const [myCardListNotBy, setMyCardListNotBy] = useState({});

  const getMyCardListBy = () => {
    axios({
      url: "/getMyCardListBy.do",
      method: "post",
      data: { memberId: "user2" },
    })
      .then((res) => {
        //console.log(res.data);
        //console.log("by");
        setMyCardListBy(res.data);
      })
      .catch((err) => {
        //onsole.log(err);
        //console.log("bbbb");
      });
  };

  const getMyCardListNotBy = () => {
    axios({
      url: "/getMyCardListNotBy.do",
      method: "post",
      data: { memberId: "user2" },
    })
      .then((res) => {
        //console.log(res.data);
        //console.log("aaaaa");
        setMyCardListNotBy(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  useEffect(() => {
    getMyCardListBy();
    getMyCardListNotBy();
  }, []);

  return (
    <ByCardGroup>
      {Array.isArray(myCardListBy) &&
        myCardListBy.map((byCardData, index) => (
          <MyByCard key={index} byCardData={byCardData} />
        ))}
      {Array.isArray(myCardListNotBy) &&
        myCardListNotBy.map((notByCardData, index) => (
          <MyByCard key={index} byCardData={notByCardData} hideTitle />
        ))}
    </ByCardGroup>
  );
};

export const MyHiCardLeftSection = ({ myCardHi }) => {
  return (
    <MyHiCardLeftDiv>
      <MyHiCardShape>
        <Link to={`../hiCardDetail/${myCardHi.memberHiNumber}`}>
          <img
            src={myCardHi.hiCardImageFrontPath}
            alt="하이카드 이미지"
            style={{ width: "100%" }}
          />
          {/* <HiCard>
            <HiCardName>{myCardHi.memberHiNickname}</HiCardName>
            <HiCardNoise></HiCardNoise>
          </HiCard> */}
        </Link>
      </MyHiCardShape>
      <ByCardNumberPart>
        <HiCardName>{myCardHi.memberHiNickname}</HiCardName>
        <HiCardNumber>{myCardHi.memberHiNumber}</HiCardNumber>
      </ByCardNumberPart>
    </MyHiCardLeftDiv>
  );
};

export const MyHiCardCenterSection = ({ myCardHi }) => {
  return (
    <MyHiCardCenterDiv>
      <CardTitle>Hi:Card</CardTitle>
      <HiCardLimit>
        <HiCardLimitTitle>이번 달 사용한도</HiCardLimitTitle>
        <HiCardAmout>
          {myCardHi.totalLimit ? myCardHi.totalLimit.toLocaleString() : ""} 원
        </HiCardAmout>
      </HiCardLimit>
      <HiCardUse>
        <HiCardUseTitle>이번 달 사용금액</HiCardUseTitle>
        <HiCardAmout>
          {myCardHi.thisMonthSum ? myCardHi.thisMonthSum.toLocaleString() : ""}{" "}
          원
        </HiCardAmout>
      </HiCardUse>
    </MyHiCardCenterDiv>
  );
};

const MyHiCardRightSection = ({ myCardHi }) => {
  const [isMyPaymentHistoryModalOpen, setIsMyPaymentHistoryModalOpen] =
    useState(false);
  const [isVirtualCardApplyModalOpen, setIsVirtualCardApplyModalOpen] =
    useState(false);
  const [isMyAccountChangeModalOpen, setIsMyAccountChangeModalOpen] =
    useState(false);

  const openMyPaymentHistoryModal = () => {
    setIsMyPaymentHistoryModalOpen(true);
  };

  const openVirtualCardApplyModal = () => {
    setIsVirtualCardApplyModalOpen(true);
  };

  const openMyAccountChangeModal = () => {
    setIsMyAccountChangeModalOpen(true);
  };

  const closeModal = () => {
    setIsMyPaymentHistoryModalOpen(false);
    setIsVirtualCardApplyModalOpen(false);
    setIsMyAccountChangeModalOpen(false);
  };

  return (
    <MyHiCardRightDiv>
      <HiCardInfo>
        <CardPoint>
          <CardPointTitle>Hi:Card Point</CardPointTitle>
          <CardPointScore>{myCardHi.memberHiPoint}P</CardPointScore>
        </CardPoint>
        <HiCardGrade>
          <HiCardGradeTitle>Hi:Credit Grade</HiCardGradeTitle>
          <div className="HiCardGradeImage">
            {/* hicardInfo.classBenefitName에 따라 다른 이미지를 표시 */}
            {myCardHi.classBenefitName === "BRONZE" && (
              <img
                src={bronzeImg}
                alt="하이카드 등급 이미지"
                style={{ width: "9rem", height: "6rem" }}
              ></img>
            )}
            {myCardHi.classBenefitName === "SILVER" && (
              <img
                src={silverImg}
                alt="하이카드 등급 이미지"
                style={{ width: "9rem", height: "6rem" }}
              ></img>
            )}
            {myCardHi.classBenefitName === "GOLD" && (
              <img
                src={goldImg}
                alt="하이카드 등급 이미지"
                style={{ width: "9rem", height: "6rem" }}
              ></img>
            )}
            {myCardHi.classBenefitName === "PLATINUM" && (
              <img
                src={platinumImg}
                alt="하이카드 등급 이미지"
                style={{ width: "9rem", height: "6rem" }}
              ></img>
            )}
          </div>
        </HiCardGrade>
      </HiCardInfo>
      <BottomButtonDiv>
        <LinkButton onClick={openMyPaymentHistoryModal}>
          나의 결제 이력
        </LinkButton>
        {/* MyPaymentHistory 모달 */}
        {isMyPaymentHistoryModalOpen && (
          <HiCardModal>
            {/* <button onClick={closeModal}>Close Modal</button> */}
            <ModalClose src={close} onClick={closeModal}></ModalClose>
            <MyPaymentHistory></MyPaymentHistory>
          </HiCardModal>
        )}
        <ButtonUnderLine>
          <TempCardNumber onClick={openVirtualCardApplyModal}>
            가상카드 발급신청
          </TempCardNumber>
          {/* VirtualCardApply 모달 */}
          {isVirtualCardApplyModalOpen && (
            <HiCardModal>
              {/* <button onClick={closeModal}>Close Modal</button> */}
              <ModalClose src={close} onClick={closeModal}></ModalClose>
              <VirtualCardApply></VirtualCardApply>
            </HiCardModal>
          )}
          <AccountChange onClick={openMyAccountChangeModal}>
            연결계좌변경
          </AccountChange>
          {/* MyHiCardAccountChange 모달 */}
          {isMyAccountChangeModalOpen && (
            <HiCardModal>
              {/* <button onClick={closeModal}>Close Modal</button> */}
              <ModalClose src={close} onClick={closeModal}></ModalClose>
              <MyHiCardAccountChange></MyHiCardAccountChange>
            </HiCardModal>
          )}
          <Link to="/lostCard" style={{ textDecoration: "none" }}>
            <LostCard>분실신고</LostCard>
          </Link>
        </ButtonUnderLine>
      </BottomButtonDiv>
    </MyHiCardRightDiv>
  );
};

export const MyByCard = ({ byCardData, hideTitle }) => {
  return (
    <ByCardBox>
      <MyByCardAllSection>
        <MyByCardLeftSection byCardData={byCardData}></MyByCardLeftSection>
        <MyByCardInfoSection>
          <MyByCardCenterSection
            byCardData={byCardData}
            hideTitle={hideTitle}
          ></MyByCardCenterSection>
          <MyByCardRightSection byCardData={byCardData}></MyByCardRightSection>
        </MyByCardInfoSection>
      </MyByCardAllSection>
    </ByCardBox>
  );
};

export const MyByCardLeftSection = ({ byCardData }) => {
  return (
    <MyByCardLeftDiv>
      <MyByCardShape>
        <img
          src={byCardData.byImagePath}
          alt="바이카드 이미지"
          style={{ width: "100%" }}
        />
        {/* <ByCard><ByCardNoise></ByCardNoise></ByCard> */}
      </MyByCardShape>
      <ByCardNumberPart>
        <ByCardNumberName>{byCardData.memberCardByNickname}</ByCardNumberName>
        <ByCardNumber>{byCardData.memberByNumber}</ByCardNumber>
      </ByCardNumberPart>
    </MyByCardLeftDiv>
  );
};

export const MyByCardCenterSection = ({ byCardData, hideTitle }) => {
  const formatter = new Intl.NumberFormat("ko-KR");

  // memberByLimit 값을 만원 단위로 변환
  const limitInTenThousand = byCardData.byBenefitMinCondition / 10000;
  const formattedLimit = formatter.format(limitInTenThousand);

  return (
    <MyByCardCenterDiv>
      <ByCardBenefitContents>
        <ByCardBenefitDetail>업종별 0.5%~3% 적립</ByCardBenefitDetail>
        <ByCardBenefitDetail>온라인 간편 결제 5% 적립</ByCardBenefitDetail>
        <ByCardBenefitDetail>해외 가맹점 3% 적립</ByCardBenefitDetail>
        <ByCardBenefitCondition>
          전월실적 {formattedLimit}원 이상
        </ByCardBenefitCondition>
      </ByCardBenefitContents>
      {!hideTitle && <CardTitle>By:Card</CardTitle>}
    </MyByCardCenterDiv>
  );
};

export const MyByCardRightSection = ({ byCardData }) => {
  const [isMyAccountChangeModalOpen, setIsMyAccountChangeModalOpen] =
    useState(false);

  const openMyAccountChangeModal = () => {
    setIsMyAccountChangeModalOpen(true);
  };

  const closeModal = () => {
    setIsMyAccountChangeModalOpen(false);
  };

  const addHiCard = () => {
    alert("하이카드 추가");

    axios({
      url: "/addHiCard.do",
      method: "post",
      data: { memberId: "user2", memberByNumber: byCardData.memberByNumber },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const excludeHiCard = () => {
    alert("하이카드 제외");

    axios({
      url: "/addHiCard.do",
      method: "post",
      data: { memberId: "user2", memberByNumber: byCardData.memberByNumber },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyByCardRightDiv>
      <CardPoint>
        {byCardData.memberHiNumber === null ? (
          <CardPointTitle style={{ fontSize: "2rem" }}>
            이번 달 사용금액
          </CardPointTitle>
        ) : (
          <CardPointTitle>By:Card Point</CardPointTitle>
        )}
        {/* <CardPointTitle>By:Card Point</CardPointTitle> */}
        {byCardData.memberHiNumber === null ? (
          <CardPointScore>{byCardData.thisMonthSum}원</CardPointScore>
        ) : (
          <CardPointScore>4500P</CardPointScore>
        )}
      </CardPoint>
      <BottomButtonDiv>
        {byCardData.memberHiNumber === null ? (
          <LinkButton onClick={addHiCard}>하이카드 추가</LinkButton>
        ) : (
          <LinkButton onClick={excludeHiCard}>하이카드 제외</LinkButton>
        )}
        <ButtonUnderLine>
          <AccountChange onClick={openMyAccountChangeModal}>
            연결계좌변경
          </AccountChange>
          {/* MyHiCardAccountChange 모달 */}
          {isMyAccountChangeModalOpen && (
            <HiCardModal>
              {/* <button onClick={closeModal}>Close Modal</button> */}
              <ModalClose src={close} onClick={closeModal}></ModalClose>
              <MyHiCardAccountChange></MyHiCardAccountChange>
            </HiCardModal>
          )}
          <Link to="/lostCard" style={{ textDecoration: "none" }}>
            <LostCard>분실신고</LostCard>
          </Link>
        </ButtonUnderLine>
      </BottomButtonDiv>
    </MyByCardRightDiv>
  );
};

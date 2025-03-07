import { useState } from 'react';
import styled from 'styled-components';

const PlayBox = styled.div`
  height: 400px;
  min-width: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  /* margin: 0 48px;
  &:last-child {
    margin: 0 0 0 48px;
  }
  &:first-child {
    margin: 0 48px 0 0;
  } */
`;

const DdayInner = styled.div`
  @keyframes spred {
    from {
      width: 63px;
    }
    to {
      width: 150px;
    }
  }
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 29% auto;
  border-top: solid 5px #529acc;
  border-bottom: solid 5px #529acc;
  width: 150px;
  height: 150px;
  transition: 1s;
  p {
    /* color: #49B0FF; */
    color: #ffffff;
    font-size: 36px;
    font-weight: bolder;
  }
  ${PlayBox}:hover & {
    animation-name: spred;
    animation-duration: 1.3s;
  }
`;

const Dday = styled.div`
  background-color: #000000b3;
  height: 280px;
  width: 192px;
  border-radius: 6px;
  margin: 0 auto;
  position: absolute;
  top: 40px;
  left: 14px;
  opacity: 0;
  transition: 1s;
  ${PlayBox}:hover & {
    opacity: 1;
  }
`;

const JudgeBox = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
`;

const Judge = styled.div`
  height: 28px;
  width: 58px;
  margin-left: 14px;
  display: flex;
  align-items: center;
`;

const JudgeHeart = styled(Judge)`
  margin-left: 0;
`;

const JudgeImg = styled.img`
  height: 20px;
  width: 22px;
  margin-right: 5px;
`;

const PlayImage = styled.img`
  margin: 0 auto 11px;
  height: 280px;
  width: 192px;
  border-radius: 6px;
`;

const PlayTitle = styled.h4`
  font-size: 20px;
  margin: 0 4px 5px 0;
  text-align: center;
`;

const PlayDate = styled.p`
  text-align: center;
  color: #22222280;
  font-size: 17px;
  font-weight: lighter;
  margin: 0;
`;

const Play = ({ play }) => {
  const {
    poster,
    title,
    likes,
    star_avg: starAvg,
    start_date: startDate,
    end_date: endDate,
  } = play;

  const [ready, setReady] = useState(3);

  return (
    <PlayBox>
      <JudgeBox>
        <Judge>
          <JudgeImg src='/svg/star.svg' alt='평점' />
          {starAvg}
        </Judge>
        <JudgeHeart>
          <JudgeImg src='/svg/heart.svg' alt='찜 갯수' />
          {likes}
        </JudgeHeart>
      </JudgeBox>
      <PlayImage src={poster || '/svg/poster_test.svg'} />
      <PlayTitle>{title}</PlayTitle>
      <PlayDate>{`${startDate} ~ ${endDate || '별도 안내'}`}</PlayDate>
      <Dday>
        <DdayInner>
          <p>D-{ready}</p>
        </DdayInner>
      </Dday>
    </PlayBox>
  );
};

export default Play;

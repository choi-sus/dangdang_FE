import React ,{useEffect, useState}from "react";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as profileActions } from "../redux/modules/profile";
import {Button, Grid, Text} from "../elements/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { history } from "../redux/configStore";
import { petimage_bg, camera } from "../static/images";

const ProfileWrite = () => {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState('');
  const encodeFileToBase64 = (fileBlob) => {
     const reader = new FileReader();
     reader.readAsDataURL(fileBlob);
     return new Promise((resolve) => {
       reader.onload = () => { 
         setImageSrc(reader.result); resolve();
        };
      });
  };
  let now = new Date();
  let year = now.getFullYear();
  let mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1);
  let day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());
  let yearList = [];
  for (let i=1990; i<=year; i++){ yearList.unshift(i)}
  let monthList = [];
  for(let i=1; i <= 12; i++) { i > 9 ? monthList.push(i) : monthList.push('0'+i)}
  let dayList = [];
  for(let i=1; i <= 31; i++) { i > 9 ? dayList.push(i) : dayList.push('0'+i)}
  
  const [petImage,setPetImage] = useState("");
  const [petName,setPetName] = useState("");
  const [selYear, setSelYear] = useState("");
  const [selMonth, setSelMonth] = useState("");
  const [selDay, setSelDay] = useState("");
  const [selBreed, setSelBreed] = useState("");
  const [selGender, setSelGender] = useState("");

  let formData = new FormData();
  const loadPreview = (e) => {encodeFileToBase64(e.target.files[0]); setPetImage(e.target.files[0])};
  const myPetName = (e) => {setPetName(e.target.value)};
  const selectedYear = (e) => {setSelYear(e.target.value)};
  const selectedMonth = (e) => {setSelMonth(e.target.value)};
  const selectedDay = (e) => {setSelDay(e.target.value)};
  const selectedBreed = (e) => {setSelBreed(e.target.value)};
  const selectedGender = (e) => {setSelGender(e.target.value)};
  
  const sendPetInfo = (e) => {
    const petBirth = selYear + " / " + selMonth+" / "+selDay;
    if (petImage ==="" || petName ==="" ||  selGender ==="" ||  petBirth ==="" || selBreed ==="" ){
      window.alert("입력하지 않은 항목이 있는지 확인 후 다시 시도해주세요!")
    }else{
      formData.append("petImage",petImage);
      formData.append("petName",petName)
      formData.append("petGender",selGender)
      formData.append("petBirth",petBirth)
      formData.append("petBreed",selBreed)
      dispatch(profileActions.addPetDB(formData))
    }
  };
  useEffect(()=>{
    dispatch(profileActions.getPetDB())
    if(petInfo){
      setImageSrc(petInfo.petImage)
      setPetName(petInfo.petName)
      setSelGender(petInfo.petGender)
      setSelYear(petInfo.petBirth.split("-")[0])
      setSelMonth(petInfo.petBirth.split("-")[1])
      setSelDay(petInfo.petBirth.split("-")[2])
      setSelBreed(petInfo.petBreed)
    }
  },[])

  const petInfo = useSelector((state)=> state.profile.pet)
  const editPetInfo = (e) => {
    const petBirth = selYear+"-"+selMonth+"-"+selDay;
    if (petName ==="" ||  selGender ==="" ||  petBirth ==="" || selBreed ==="" ){
      window.alert("입력하지 않은 항목이 있는지 확인 후 다시 시도해주세요!")
    }else{
    formData.append("petImage",petImage);
    formData.append("petName",petName)
    formData.append("petGender",selGender)
    formData.append("petBirth",petBirth)
    formData.append("petBreed",selBreed)
    dispatch(profileActions.editPetDB(formData))
    }
  };

  return(
    <PageBody>
      <Head>
        <Grid width="auto" _onClick={()=> {history.replace("/profile")}}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </Grid>
        {(petInfo ? 
          <Text center color="#4F4F4F" size="18px">펫 프로필 수정</Text>
        : 
          <Text center color="#4F4F4F" size="18px">펫 프로필 설정</Text>
        )}
      </Head>
      <Grid>
        <ImageCircle className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img"/>}
          <label htmlFor="input-file">
            <img src={camera} alt="사진 선택 카메라 아이콘" />
          </label>
          <input type="file" id="input-file" accept="image/*, .jpg , .png, .jpeg, .gif" onChange={loadPreview} />
        </ImageCircle>
        <NameInput>
          <label>이름</label>
          <input placeholder="이름을 입력하세요" value={petName} onChange={myPetName}></input>
        </NameInput>
        <BirthInput>
          <h5>생일</h5>
          <div>
            <select name="year" onChange={selectedYear} value={selYear ? selYear : setSelYear(year)} style={{margin:"0px"}}>
              {yearList.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
            <select name="month" onChange={selectedMonth} value={selMonth ? selMonth : setSelMonth(mon)}>
              {monthList.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
            <select name="day" onChange={selectedDay} value={selDay ? selDay : setSelDay(day)}>
              {dayList.map((d) => (<option key={d} value={d}>{d}</option>))}
            </select>
          </div>
        </BirthInput>
        <RadioBox>
          <h5>분류</h5>
          <div onChange={selectedBreed} defaultChecked={"소형견"}>
            <label>
              <input type="radio" name="breed" value={"소형견"} checked={selBreed === "소형견"}/>
              <span>소형견</span>
            </label>
            <label>
              <input type="radio" name="breed" value={"중형견"} checked={selBreed === "중형견"}/>
              <span>중형견</span>
            </label>
            <label>
              <input type="radio" name="breed" value={"대형견"} checked={selBreed === "대형견"}/>
              <span>대형견</span>
            </label>
          </div>
        </RadioBox>     
        <RadioBox>
          <h5>성별</h5>
          <div onChange={selectedGender}>
            <label>
              <input type="radio" name="gender" value={"여"} checked={selGender === "여"}/>
              <span>여자</span>
            </label>
            <label>
              <input type="radio" name="gender" value={"남"} checked={selGender === "남"}/>
              <span>남자</span>
            </label>
            <label>
              <input type="radio" name="gender" value={"중성화"} checked={selGender === "중성화"}/>
              <span>중성화</span>
            </label>
          </div>
        </RadioBox>
        {petInfo ?
          <Button width="80%" margin="40px" _onClick={()=>{editPetInfo();}}>수정하기</Button>
        :
          <Button width="80%" margin="40px" _onClick={()=>{sendPetInfo();}}>등록하기</Button>}
      </Grid>
    </PageBody>
  )
}

export default ProfileWrite;

const PageBody = styled.div`
  padding: 15.5% 0;
  height: inherit;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Head = styled.div`
  margin-bottom: 25px;
  padding: 0 ${({ theme }) => theme.paddings.lg};
  &::after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  & > div {
    float: left;
  }
  & > p {
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeight.base};
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray_4};
  }
  svg{
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;
  }
`;

const ImageCircle = styled.div`
  width: 130px;
  height: 130px;
  margin: 0 auto ${({ theme }) => theme.margins.base};
  border-radius: 50%;
  background-image: url(${petimage_bg});
  background-size: cover;
  position: relative;
  img{
    width: 130px;
    height: 130px;
    margin: 0 auto ${({ theme }) => theme.margins.base};
    border-radius: 50%;
  }
  input {
      display: none;
    }
  label{
    position: absolute;
    top: 90px;
    left: 90px;
    cursor: pointer;
    img{
      width: 39px;
      height: 39px;
    }
  }
`;
const NameInput = styled.div`
  display: grid;
  margin: 0 30px ${({ theme }) => theme.margins.xl};
  label{
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray_3};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
  }
  input{
    height: 60px;
    margin: ${({ theme }) => theme.margins.base} 0px;
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    border:none;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: inherit;
    &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
    }
  }
`;

const BirthInput = styled.div`
  margin: 0 30px ${({ theme }) => theme.margins.xxxxl};
  h5{
    margin: 0 0 ${({ theme }) => theme.margins.lg};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray_3};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
  }
  &:not(:first-child) select {margin-left: ${({ theme }) => theme.margins.base};}
  select{
    line-height: 50px;
    display:inline-block;
    width: calc(33.33% - 6.66px);
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    color: ${({ theme }) => theme.colors.gray_2};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.base};
    border: none;
    cursor: pointer;
    -webkit-appearance:none; /* for chrome */
    -moz-appearance:none; /*for firefox*/
    appearance:none;
    select::-ms-expand{
    display:none;/*for IE10,11*/
    }
  }
`;

const RadioBox = styled.div`
  margin: 0 30px ${({ theme }) => theme.margins.xl};
  h5{
    margin: 0 0 ${({ theme }) => theme.margins.lg};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray_3};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
  }
  label{
    &:not(:first-child) span {margin-left: ${({ theme }) => theme.margins.base};}
    span{
      text-align: center;
      line-height: 50px;
      display:inline-block;
      width: calc(33.33% - 6.66px);
      height: 50px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 10px;
      box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
      color: ${({ theme }) => theme.colors.gray_2};
      cursor: pointer;
    }
  }
  input {
    display: none;
  }
  input:checked + span {
    text-align: center;
    line-height: 50px;
    display:inline-block;
    box-sizing: border-box;
    width: calc(33.33% - 6.66px);
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(158, 158, 158, 0.25);
    color: ${({ theme }) => theme.colors.main_2};
    border: solid 1px ${({ theme }) => theme.colors.main_2};
    }
`;
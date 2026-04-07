const axios = require("axios");
const cors = require("cors");
const expres = require("express");
const fs = require("fs");
const csv = require("csv-parser");

// 스키마 : 연번,업체명,이메일 주소,대표자(익명),벤처확인유형,지역,간략주소,업종분류(기보),업종명(11차),주생산품,벤처유효시작일,벤처유효종료일,벤처확인기관,신규/재확인
const ventureList = [];
const test = [];

fs.createReadStream("./ventureList2603.csv")
.pipe(csv())
.on("data",(data)=>{ventureList.push(data)})
.on("end",()=>{
    for (let i=0;i<100;i++){
        test.push(ventureList[i]);
    }
    
    /**
     *  [ {
    '연번': '100',
    '업체명': '주식회사 어시스타(ASSISTAR)',
    '이메일 주소': '',
    '대표자(익명)': '이**',
    '벤처확인유형': '혁신성장유형',
    '지역': '인천',
    '간략주소': '인천광역시 미추홀구',
    '업종분류(기보)': '제조업',
    '업종명(11차)': '체조, 육상 및 체력단련용 장비 제조업',
    '주생산품': '디지털헬스머신, 자동화운동기기, 로봇 이용 스포츠 서비스, 로봇용 S/W 개발 및 공급',
    '벤처유효시작일': '20260324',
    '벤처유효종료일': '20290323',
    '벤처확인기관': '벤처기업확인기관',
    '신규/재확인': '신규'
  },...] 상태임.

     */
});


// 일단 100개만 해 본다.



console.log(test);

const result = [];




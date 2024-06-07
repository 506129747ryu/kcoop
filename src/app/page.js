'use client'

import Header from "./components/Header"
import Acordion from "./components/Acordion"
import ResearchBox from "./components/ResearchBox"
import DropDown from "./components/DropDown"
import ResearchButton from "./components/button/ResearchButton"
import DesideButton from "./components/button/DesideButton"
import AddComponent from "./components/AddComponent"
import Image from 'next/image'
import { useState } from 'react'

const AcordionContents = () => {
  return (
    <div>
      <div>お見積りはもちろん、お申込手続き</div>
      <div>住所変更などの各種手続きがスムーズに行えます。</div>
      <smButton text="新規登録"/>
      <smButton text="ログイン" />
      <div>※オンラインで簡単に登録できます</div>
    </div>
  )
}

const ResearchContent1 = () => {
  return (
    <div class="w-full">
      <div class="flex justify-center items-center">
        <DropDown list={["--", "2024（令和6）", "2023（令和5)"]} class="w-36 h-8"/>年　　
        <DropDown list={["--",1,2,3]} class="w-16 h-8" />月　　
        <DropDown list={["--",10, 20, 30]} class="w-16 h-8" />日
      </div>
      <div class="mt-2 flex justify-center  border-t-2 border-white">
        <ResearchButton text="男性" />
        <ResearchButton text="女性" />
      </div>
    </div>
  )
}

const ResearchContent2 = () => {
  return (
    <div class="flex items-center">
      <ResearchButton text="できるだけ早く保障を開始したい" />
      <ResearchButton text={["保障の開始を急がない・", <br/>, "わからない"]} />
    </div>
  )
}

const Home = () => {

  const [memberCount, setMemberCount] = useState(1)

  const addButtonClicked = () => {
    if(memberCount < 3){
      setMemberCount(memberCount + 1)
    }
  }

  return (
    <div>
      <Header />
      <div class="flex justify-center m-5">
        <Image src="/top_banner/logo.png" width={257} height={71} />
      </div>
      <h1 class="text-3xl flex justify-center m-5">お見積もり・申込手続きページ</h1>
      <div class="flex justify-center">
        <Acordion notice="既に当会に加入されている方（組合員）はマイページでのお手続きが便利です！" contents={<AcordionContents />}/>
      </div>
      <div class ="flex justify-center">
        <AddComponent
          component={
            <ResearchBox
            topic={[memberCount,"人目（保障の対象となられる方"]}
            description="※最大3名までお見積りできます。次画面で追加できます。"
            research="保障の対象となられる方の生年月日・性別を入力してください。"
            contents={<ResearchContent1 />}
            />
          }
          count={memberCount}
          handleClick={addButtonClicked}/>
      </div>
      <div class ="flex justify-center">
      
      </div>
      <div class ="flex justify-center">
      <ResearchBox
        topic="保障の開始日を選択"
        research={["保障の開始日を入力してください。", <br/>, "開始日が決まっていない方は「保障の開始を急がない・わからない」を選んでください。"]}
        contents={<ResearchContent2 />}
      />
      
      </div>
      <div class="flex justify-center m-5">
        <DesideButton text="お見積り →"/>
      </div>
      
    </div>
  )
}

export default Home 
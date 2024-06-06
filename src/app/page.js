import Header from "./components/Header"
import Acordion from "./components/Acordion"
import smButton from "./components/button/smButton"
import ResearchBox from "./components/ResearchBox"
import DropDown from "./components/DropDown"
import ResearchButton from "./components/button/ResearchButton"
import DesideButton from "./components/button/DesideButton"

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
    <div>
      <div class="flex justify-start">
        生年月日
        <DropDown list={[2024, 2023]}/>年
        <DropDown list={[1,2,3]}月 />月
        <DropDown list={[10, 20, 30]} />日
      </div>
      <div class="mt-2">
        性別
        <ResearchButton text="男性" />
        <ResearchButton text="女性" />
      </div>
    </div>
  )
}

const ResearchContent2 = () => {
  return (
    <div>
      <ResearchButton text="できるだけ早く保障を開始したい" />
      <ResearchButton text={["保障の開始を急がない・", <br/>, "わからない"]} />
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Header />
      <h1 class="text-3xl flex justify-center m-5">お見積もり・申込手続きページ</h1>
      <div class="flex justify-center">
        <Acordion notice="既に当会に加入されている方（組合員）はマイページでのお手続きが便利です！" contents={<AcordionContents />}/>
      </div>
      <div class ="flex justify-center">
      <ResearchBox
        tittle="お見積もりを始める"
        topic="人目（保障の対象となられる方"
        description="※最大3名までお見積りできます。次画面で追加できます。"
        research="保障の対象となられる方の生年月日・性別を入力してください。"
        contents={<ResearchContent1 />}
      />
      </div>
      <div class ="flex justify-center">
      <ResearchBox
        topic="保障の開始日を選択"
        research={["保障の開始日を入力してください。", <br/>, "開始日が決まっていない、もしくは検討中の方は「保障の開始を急がない・わからない」を選んでください。"]}
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
'use client'

import HeaderButton from './button/HeaderButton'

const Header = () => {
    return (
        <div>
            <header class="border h-14">

            </header>
            <div class="border h-12 shadow flex justify-center">
                <HeaderButton text="共済商品一覧" />
                <HeaderButton text="選び方ガイド" />
                <HeaderButton text="こくみん共済coopのこと" />
                <HeaderButton text="あんしんのタネ" />
                <HeaderButton text="知る・楽しむ" />
            </div>
        </div>
    )
}

export default Header;
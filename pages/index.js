import Head from 'next/head'
import "bootswatch/dist/zephyr/bootstrap.css"
import "react-bootstrap"
export default function Home() {
  return (
    <div>
      <Head>
        <title>CRONAVIRUS - CRONOS REFLECT TOKEN </title>
        <meta name="description" content="CRONOS Reflect Token, Cryptocurrency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <article className={"container"}>
                <header className={"mt-5 text-center"}>
                    <h1 className={"fw-bolder"}>CRONAVIRUS</h1>
                    <p>RFI token</p>
                </header>
                <section className={"text-center"}>
                    <img src="/cronavirus.png" alt="CRONAVIRUS"/>
                </section>
                <section className={"row offset-md-3 col-md-6"}>
                    <h2>What is CRONAVIRUS</h2>
                    <p>A CRONOS EVM-based reflect token.</p>
                    <h2>How to buy CRONAVIRUS</h2>
                    <p>CRONAVIRUS is available for trading on <a href="https://app.elk.finance/#/swap?inputCurrency=0x039acec8659cc69a35e8a48c618c47128934b575">Elk.Finance</a>.</p>
                    <p>You must increase the slippage tolerance to 7% to trade.</p>
                    <h2>CRONAVIRUS Tokenomics</h2>
                    <p>100% Liquidity.</p>
                    <h2>Team</h2>
                    <p>China.</p>
                    <h2>Who to add CRONOS RPC to Metamask</h2>
                    <dl>
                        <dt>Network name</dt>
                        <dd>Cronos Mainnet Beta</dd>
                        <dt>RPC URL</dt>
                        <dd>https://evm-cronos.crypto.org</dd>
                        <dt>Chain ID</dt>
                        <dd>25</dd>
                        <dt>Currency</dt>
                        <dd>CRO</dd>
                        <dt>Block Explorer</dt>
                        <dd>https://cronos.crypto.org/explorer</dd>
                    </dl>
                    <h2>What is the CRONAVIRUS smart contract address</h2>
                    <p><pre>0x039acec8659cc69a35e8a48c618c47128934b575</pre></p>
                    <h2>Telegram group</h2>
                    <a href="//t.me/cronavirusfinance">Cronavirus Telegram</a>
                </section>
            </article>
        </main>
    </div>
  )
}

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

                    <h2>About</h2>
                    <p>A CRONOS EVM-based reflect token.</p>

                    <h2>How it works</h2>
                    <p>Transactions are a subject to a 4% burn and 3% redistribution to all holders.</p>
                    <p>Every transaction creates deflationary pressures on the asset.</p>
                    <p>Buy early, hold long, win big. It's that simple.</p>

                    <h2>Mission</h2>
                    <p>To go viral. And provide a simple way to generate income for all.</p>

                    <h2>Tokenomics</h2>
                    <p>100% Liquidity.</p>
                    <p>All liquidity has been minted and put up as LP. We cannot mint more.</p>
                    <p>The total supply is 100M tokens.</p>

                    <h2>Team</h2>
                    <p><a href="//truemiller.com">True Miller</a>.</p>


                    <h2>Social Media</h2>
                    <a href="//t.me/cronavirusfinance">Cronavirus Telegram</a>

                    <h2>Whitepaper</h2>
                    <p>TBA</p>

                    <h2>FAQs</h2>

                    <h3>How to buy CRONAVIRUS</h3>
                    <p>CRONAVIRUS is available for trading on <a href="https://app.elk.finance/#/swap?inputCurrency=0x039acec8659cc69a35e8a48c618c47128934b575">Elk.Finance</a>.</p>
                    <p>You must increase the slippage tolerance to 7% to trade.</p>
                    <h3>How to add CRONOS RPC to Metamask</h3>
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

                    <h3>What is the CRONAVIRUS smart contract address</h3>
                    <p><pre>0x039acec8659cc69a35e8a48c618c47128934b575</pre></p>
                </section>
            </article>
        </main>
    </div>
  )
}

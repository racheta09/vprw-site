import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>VIRTUAL PERADOX RACING WORLD</title>
                <meta
                    name="description"
                    content="the ultimate Decentralized blockchain-based car racing game that Allows you to earn native tokens and NFTs while you enjoy the thrill of the race.

                    "
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex flex-col">
                <HeroSection />
                <div className="flex flex-col items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            GAMEPLAY DESCRIPTION
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            The Virtual Peradox Racing World Game is, at its
                            core, an ecosystem for players and creators made up
                            of three primary Components: A MARKETPLACE, A GAME,
                            AND THE GAME ITSELF. In the game, players will
                            compete in tournaments for which they will be paid,
                            as well as a race on Tracks all across the
                            metaverse. Players can use the token to compete in
                            tournaments, buy cars, and New skins, and perform
                            mechanical modifications. Players will also be able
                            to build their garage, buy and sell automobiles,
                            rent out garage space, and Auction their assets.
                            Various tracks can be acquired and used to stage
                            tournaments for which you Can sell tickets. The more
                            races that players win, the more rewards they will
                            receive; there will be no Limit to how much money
                            they can earn.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            MISSION
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            The goal is to establish a system that allows
                            creators to freely create, play, share, and trade
                            without Relying on a central authority while
                            maintaining safe copyright ownership using native
                            token. In this gaming environment where everyone can
                            play and receive rewards, allowing anyone to be a
                            Part of something that has the potential to
                            completely transform the racing industry. Created
                            With Blockchain technology to ensure that their
                            Players make money by earning tokens. We also give
                            them the ability to trade tokens on exchanges and
                            trade NFT’S on our Marketplace.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            REWARDS
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            The prizes are distributed using a one-of-a-kind
                            process. Players that deposit initial tokens to
                            enter The event are given a bonus based on the
                            amount they deposit. Players use their tokens to
                            participate in the race; if they win, they receive a
                            portion of the prize, if They lose, they only lose
                            the tokens they used to participate in the race, not
                            all of their invested Tokens.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            EXAMPLE
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            Player (A) deposited a total of 1000 Tokens and used
                            100 of them to enter the race. If the reward pool Is
                            2x, they earn their share based on the pool size and
                            where they finish the race. If they lose the Race,
                            the same mechanics will be applied, making it a
                            win-win situation for all players.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            BENEFITS FOR HOLDERS
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            Players can earn 90% APY if they keep their
                            deposited tokens in the system for at least 30 days,
                            Even if they don’t play, thus it’s a win-win
                            situation because all players, whether they play or
                            not, get Paid for keeping their tokens in the
                            system.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            THE GAMEPLAY FLOW ARE AS FOLLOWS
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            1. The player will select a car from their
                            collection or buy a new one using NFTs. 2. The
                            player will then select a track to race on. 3. The
                            player will have to use their driving skills to
                            avoid obstacles and other players while 4. If the
                            player’s car meets with an accident, they will have
                            to pay a fine in the form of native Tokens. 5. The
                            player can use their driving skills to evade the
                            police or pay a fine in the form of native Tokens.
                            6. The player can steal other player’s cars and earn
                            rewards. 7. The game will end once the player
                            completes the track or runs out of time.
                        </p>
                    </div>
                    <div className="bg-[#F28322] p-8 items-center">
                        <h3 className=" text-center md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-4xl sm:text-3xl text-2xl font-semibold text-black capitalize">
                            CONCLUSION
                        </h3>
                        <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5">
                            In conclusion, The Virtual Peradox Racing World
                            play-to-earn game with NFT mechanism is an exciting
                            and unique game. That will provide players with a
                            thrilling racing experience while also allowing them
                            to earn rewards. Using native tokens and NFTs. The
                            game’s incorporation of police chases and theft
                            features adds an Extra layer of excitement, making
                            it a must-play for all gamers
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

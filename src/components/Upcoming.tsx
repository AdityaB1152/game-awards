// @ts-nocheck

import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { BentoTilt } from "./Features";
import AnimatedTitle from "./AnimatedTitle";
// Assuming BentoCard2 component is imported

type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
};

const games = [
   
    { title: "Intergalactic: The Heretic Prophet", banner: "https://4kwallpapers.com/images/wallpapers/intergalactic-the-1284x2778-20260.jpeg", trailer: "https://www.youtube.com/watch?v=xyz", description: "A brand new Naughty Dog game", platform: ["PS5", "PC"] },
    { title: "Elden Ring Spinoff", banner: "https://sm.ign.com/ign_in/cover/e/elden-ring/elden-ring-nightreign_gp9e.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "PvP and PvE arena-like combat", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "Shadow of the Colossus Dev Project", banner: "https://bizweb.dktcdn.net/thumb/1024x1024/100/083/470/products/sofclike.jpg?v=1517976211480", trailer: "https://www.youtube.com/watch?v=xyz", description: "A tense and fascinating first look", platform: ["PS5", "PC"] },
    { title: "Borderlands 4", banner: "https://images-cdn.ubuy.co.in/660361fb693b5413b62c69d8-borderlands-goty-2k-playstation-4.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "The trailer we've been waiting for", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "Okami Sequel", banner: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/okami-desktop-1-cropped_upscayl_2x_realesrgan-x4plus.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Work begins after 18 years", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "The Outer Worlds 2", banner: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/The-Outer-Worlds-2.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Real Guardians of the Galaxy vibes", platform: ["Xbox Series X", "PC"] },
    { title: "Mafia: The Old Country", banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXSoFsT2EO2Ax7rn8oJTnvZvs94rTcD0IMg&s", trailer: "https://www.youtube.com/watch?v=xyz", description: "Launching next Summer", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "Tales of the Shire", banner: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/11/tales-of-the-shire-a-the-lord-of-the-rings-game-tag-page-cover-art.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Cosy vibes, coming in March", platform: ["PC", "PS5"] },
    { title: "Blackfrost: The Long Dark 2", banner: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1586260/header.jpg?t=1734054959", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming to early access in 2026", platform: ["PC"] },
    { title: "The First Berserker: Khazan", banner: "https://assets-prd.ignimgs.com/2024/08/21/khazan-1724284423188.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Launching 27th March 2025", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "The Last of Us: Part 2 Remastered", banner: "https://image.api.playstation.com/vulcan/img/rnd/202010/2619/pBgCXC63qPCxnZLl1gDDQcZO.png  ", trailer: "https://www.youtube.com/watch?v=xyz", description: "Confirmed for PC on 3rd April", platform: ["PC"] },
    { title: "FF7 Rebirth", banner: "https://pbs.twimg.com/media/FyBp0TEWAAUGL7A?format=jpg&name=4096x4096", trailer: "https://www.youtube.com/watch?v=xyz", description: "PC release date in January", platform: ["PS5", "PC"] },
    { title: "Thick As Thieves", banner: "https://assets-prd.ignimgs.com/2024/12/13/thickasthieves-1734060474798.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "PvP and stealth mix gameplay", platform: ["PC", "PS5", "Xbox Series X"] },
    { title: "Slay The Spire 2", banner: "https://assets-prd.ignimgs.com/2024/04/10/key-art-4k-1712708658543.png?crop=16%3A9&width=888", trailer: "https://www.youtube.com/watch?v=xyz", description: "Tongue-in-cheek gameplay trailer", platform: ["PC", "Switch"] },
    { title: "The Witcher 4", banner: "https://comicbook.com/wp-content/uploads/sites/4/2024/12/The-Witcher-4-Everything-We-Know.jpg?w=1200", trailer: "https://www.youtube.com/watch?v=xyz", description: "Ciri at the helm", platform: ["PC", "PS5", "Xbox Series X"] },
    { title: "Hazelight's Split Fiction", banner: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/split-fiction-cover-art.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "New co-op game", platform: ["PS5", "Xbox Series X", "PC"] },
    { title: "Dave The Diver's In The Jungle DLC", banner: "https://image.api.playstation.com/vulcan/ap/rnd/202401/2508/f194dc023adef481689d90db93f343b73f5b4c5741925556.png", trailer: "https://www.youtube.com/watch?v=xyz", description: "DLC announced for late 2025", platform: ["PC", "PS5"] },
    { title: "Project Century", banner: "https://assets-prd.ignimgs.com/2024/12/13/projectcentury-1734110760414.png", trailer: "https://www.youtube.com/watch?v=xyz", description: "New undertaking from the Like A Dragon devs", platform: ["PS5", "PC"] },
    { title: "Core Keeper's Kyora", banner: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/mixcollage-08-dec-2024-08-04-pm-5829.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Pixel art survival game", platform: ["PC"] },
    { title: "Rematch", banner: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/rematch-player-on-field.jpeg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Football game from the Sifu devs", platform: ["PS5", "PC"] },
    { title: "Solasta 2", banner: "https://www.gematsu.com/wp-content/uploads/2024/12/Solasta-II_2024_12-12-24_007.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "New cinematic and gameplay trailer", platform: ["PC"] },
    { title: "Palworld: Feybreak Update", banner: "https://www.gamingonlinux.com/cache/youtube_thumbs/4725ddf9ab34c482e9fb2922b64adc89.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Update arriving before Christmas", platform: ["PC"] },
    { title: "Killing Floor 3", banner: "https://pbs.twimg.com/media/GPvPOsbWgAAvZyY.jpg:large", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming in March", platform: ["PC", "PS5", "Xbox Series X"] },
    { title: "Midnight Murder Club", banner: "https://assets-prd.ignimgs.com/2024/06/25/mmc-button-1719326258143.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Multiplayer horror-comedy enters crossplay beta", platform: ["PC"] },
    { title: "Helldivers 2", banner: "https://m.media-amazon.com/images/M/MV5BN2IyY2VjMDctNGMzYS00ZWEwLTkyNTgtNTdkNDQ3MzA0MDhmXkEyXkFqcGc@._V1_.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "New Illuminati faction out now", platform: ["PS5", "PC"] },
    { title: "Den of Wolves", banner: "https://assets-prd.ignimgs.com/2023/12/08/denoofwolves-1702060426568.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "First look at high-stakes heist gameplay", platform: ["PC", "PS5"] },
    { title: "Ninja Gaiden Ragebound", banner: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2542120/e2be83fea8d53f40c6870a4b6a898d32e062c4fc/capsule_616x353.jpg?t=1734106381", trailer: "https://www.youtube.com/watch?v=xyz", description: "Demon-chopping platformer in development", platform: ["PC", "PS5"] },
    { title: "Shadow Labyrinth", banner: "https://assets-prd.ignimgs.com/2024/12/13/shadowlabyrinth-1734051834030.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Dark evil Pacmen game announced", platform: ["PC"] },
    { title: "One Move Away", banner: "https://assets-prd.ignimgs.com/2024/12/13/onemoveaway-1734050604178.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Cosy car boot-sim, coming 2025", platform: ["PC"] },
    { title: "Steel Paws", banner: "https://www.esports.net/wp-content/uploads/2024/12/Screenshot_88.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Colourful mobile game announced", platform: ["Mobile"] },
    { title: "Stalcraft: X Operations", banner: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/11/mixcollage-23-nov-2024-09-34-am-858.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Derpy take on the Chernobyl Exclusion Zone", platform: ["PC"] },
    { title: "Fragpunk", banner: "https://www.fragpunk.com/pc/zt/20240514144949/assets/share_433a3ff3.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "5v5 hero shooter with card-based mechanics", platform: ["PC"] },
    { title: "Steel Hunters", banner: "https://i1.sndcdn.com/artworks-RUiqKkA5WdQ2TgwH-doHkhg-t1080x1080.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Playtest starts now", platform: ["PC", "PS5"] },
    { title: "Splitgate 2", banner: "https://cdn.gamekult.com/images/gallery/37/370366/splitgate-2-pc-ps4-ps5-xbox-x-s-xone-6e6f0890.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming in 2025, still portal-y", platform: ["PC", "PS5", "Xbox Series X"] },
    { title: "Mechabreak", banner: "https://cdn2.steamgriddb.com/grid/6ee21ee4af25ec40ff6487d439f5d28d.png", trailer: "https://www.youtube.com/watch?v=xyz", description: "Chaotic mech-em-up coming Spring 2025", platform: ["PC"] },
    { title: "Virtua Fighter New Game", banner: "https://m.media-amazon.com/images/M/MV5BMWZkMDA3ZDAtMTFmMy00Mjg2LWI0MTktZDMzOTlmMzc4ODA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "In development at SEGA", platform: ["PS5", "PC"] },
    { title: "Turok Origins", banner: "https://sm.ign.com/ign_za/cover/t/turok-orig/turok-origins_b358.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Third-person co-op shooter sequel", platform: ["PC", "PS5"] },
    { title: "The Warframe: 1999 Expansion", banner: "https://www-static.warframe.com/images/promo/1999/og-wf1999.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming tomorrow", platform: ["PC"] },
    { title: "Onimusha: Way of the Sword", banner: "https://www.gematsu.com/wp-content/uploads/2024/12/Onimusha-Way-of-the-Sword_2024_12-12-24_011.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming in 2026", platform: ["PS5", "PC"] },
    { title: "Dungeon & Fighter: Arad", banner: "https://www.nautiljon.com/images/breves/00/13/1586760601894_image.webp", trailer: "https://www.youtube.com/watch?v=xyz", description: "New ARPG from Nexon", platform: ["PC"] },
    { title: "Dying Light: The Beast", banner: "https://cdn1.epicgames.com/spt-assets/de233d312aff40918d6969f476912143/dying-light-the-beast-1vm2l.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "New look at Summer 2025", platform: ["PC", "PS5"] },
    { title: "Hunt: Showdown 1896", banner: "https://image.api.playstation.com/vulcan/ap/rnd/202408/0713/11aa7ab3426289dcab38ad887c8210975eb38c2e17956a44.jpg", trailer: "https://www.youtube.com/watch?v=xyz", description: "Coming Winter 2025", platform: ["PC", "PS5", "Xbox Series X"] },{},{},{}
  ];

  const UpcomingTitleAnnouncements = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [currentGame, setCurrentGame] = useState<number | null>(null);
    const [clickedGame, setClickedGame] = useState<number | null>(null); // Track clicked game
    const gameListRef = useRef<HTMLDivElement | null>(null); // Reference to the game list
  
    useEffect(() => {
      const sectionElement = sectionRef.current;
      const gameListElement = gameListRef.current;
    
      // Trigger the scroll animation only when section is completely visible
      const handleScroll = () => {
        if (sectionElement) {
          const sectionTop = sectionElement.getBoundingClientRect().top;
          // Trigger the scroll animation only when section is completely visible
          if (sectionTop <= window.innerHeight && sectionTop >= 0) {
            gsap.to(sectionElement, {
              backgroundColor: "black",
              duration: 0.5,
              ease: "power1.inOut",
            });
          }
        }
      };
    
      // Set GSAP ScrollTriggers for each game item and BentoCard2 to update the current game
      gsap.utils.toArray(".game-item").forEach((gameElement, index) => {
        gsap.fromTo(
          gameElement,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: gameElement,
              start: "top 80%", // Trigger when the game comes into view
              end: "bottom 20%",
              scrub: true,
              markers: false,
              onEnter: () => {
                // Update the current game when scrolling down, only if not clicked
                if (clickedGame === null) {
                  setCurrentGame(index);
                }
              },
              onLeaveBack: () => {
                // Correctly update current game when scrolling up, only if not clicked
                if (index < currentGame && clickedGame === null) {
                  setCurrentGame(index);
                }
              },
              onLeave: () => {
                // Reset opacity to ensure last item isn't stuck opaque
                gsap.to(gameElement, {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              },
            },
          }
        );
      });
    
      window.addEventListener("scroll", handleScroll);
    
      // BentoCard visibility trigger
      if (gameListElement) {
        gsap.fromTo(
          gameListElement,
          { opacity: 0 }, // Initially invisible
          {
            opacity: 1, // Fade in the game list when BentoCard is in view
            duration: 1,
            scrollTrigger: {
              trigger: sectionElement, // Make the BentoCard section trigger the list
              start: "top 80%", // Start animation when the section is 80% visible
              end: "bottom 20%",
              scrub: true,
              markers: false,
              onEnter: () => {
                // List becomes visible after BentoCard is fully in view
                gsap.to(gameListElement, {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              },
              onLeave: () => {
                // Hide the game list when BentoCard leaves the viewport
                gsap.to(gameListElement, {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              },
            },
          }
        );
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [currentGame, clickedGame]);
  
    const handleGameClick = (index: number) => {
      // Set the clicked game and prevent scroll-triggered updates
      setClickedGame(index);
      setCurrentGame(index);
    };
  
    return (
      <section
        ref={sectionRef}
        className="min-h-[120vh] w-screen bg-transparent py-10 flex flex-col items-center justify-center"
      >
        <AnimatedTitle
            title="<b>Upcoming <b>Titles <b>Announced</b>"
            containerClass="mt-5 sticky pointer-events-none mix-blend-difference relative z-10 sticky"
          />
          <div style={{height:'50px'}}></div>

          <div className="px-5 py-32">
                  <p className="font-circular-web text-lg text-blue-50">
                  Not just awards, many upcoming titles announced
                  </p>
                  <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                  Get ready for an electrifying glimpse into the future of gaming! Alongside honoring remarkable achievements, the event unveiled a lineup of thrilling upcoming titles spanning various genres and platforms. These new releases promise to captivate players with groundbreaking adventures, immersive storytelling, and innovative gameplay.
                  </p>
                </div>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0" >
          {/* Left - Game List */}
          <div
            ref={gameListRef} // Attach ref to game list container
            className="w-full md:w-1/2 space-y-6"
          >
            {games.map((game, index) => {
              if (game.title == null) {
                return (
                  <div className="game-item relative overflow-hidden cursor-pointer h-10"></div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="game-item relative overflow-hidden cursor-pointer"
                    onClick={() => handleGameClick(index)} // Handle click to update the current game
                  >
                    <h3
                      className={`text-2xl font-bold transition-all duration-300 ${
                        currentGame === index ? "text-red font-extrabold" : "text-gray-800"
                      }`}
                      style={{color:"#EDFF66",font:'zentry'}}
                    >
                      {game.title}
                    </h3>
                    
                  </div>
                );
              }
            })}
          </div>
  
          {/* Right - BentoCard Component */}
          <div className="w-full md:w-1/2 flex justify-center sticky top-0 pt-24">
            <div className="w-[500px] h-[500px]">
              {games[currentGame] && (
                <BentoTilt className="bento-tilt_1 relative h-[100vh] md:h-[80vh] shadow-lg">
                <BentoCard2
                  src={games[currentGame]?.banner}
                  title={games[currentGame]?.title}
                  description={games[currentGame]?.description}
                  isComingSoon={true}
                />
                </BentoTilt>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UpcomingTitleAnnouncements;

export const BentoCard2: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
}) => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font"></h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base"></p>
          )}
        </div>

        {isComingSoon && (
            <>
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <p className="relative z-20">Coming Soon</p>
          </div>

          
          
          </>
          
        )}
      </div>
    </div>
  );
};

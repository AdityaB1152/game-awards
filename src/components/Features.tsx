import { useState, useRef, MouseEvent } from "react";


type BentoTiltProps = {
  children: React.ReactNode;
  className?: string;
};

type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
};

export const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard: React.FC<BentoCardProps> = ({
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
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            {/* <TiLocationArrow className="relative z-20" /> */}
            <p className="relative z-20">Buy Now</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features: React.FC = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              the wi<b>nn</b>ers
            </>
          }
          description="Amidst a year filled with incredible game releases, only a few rose above the rest to claim prestigious awards, showcasing exceptional storytelling, gameplay, and innovation."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
  
  

  {/* Magazine Content */}
  <div className="col-span-12 md:col-span-7 row-span-2">
    <BentoTilt className="bento-tilt_2 relative h-[30vh] md:h-[50vh]">
      <BentoCard
        src="videos/feature-2.mp4"
        title={
          <>
            best <b>action</b> game
          </>
        }
        description="Black Myth Wu Kong"
        isComingSoon
      />
    </BentoTilt>
  </div>

  <div className="col-span-12 md:col-span-5 row-span-2">
    <BentoTilt className="bento-tilt_2 relative h-[30vh] md:h-[50vh]">
      <BentoCard
        src="videos/hero-2.mp4"
        title={
          <>
            best <b>Fighting</b> Game
          </>
        }
        description="Tekken 8"
        isComingSoon
      />
    </BentoTilt>
  </div>

  <div className="col-span-12">
    <BentoTilt className="bento-tilt_1 relative h-96 md:h-[65vh]">
      <BentoCard
        src="videos/gta6.mkv"
        title={
          <>
            the most <b>anticipated</b> game
          </>
        }
        description="Rockstar Games Presents: Grand Theft Auto 6. Releasing DEC 2025."
        isComingSoon
      />
    </BentoTilt>
  </div>

  {/* Row Below */}
  <div className="col-span-12 md:col-span-4">
    <BentoTilt className="bento-tilt_2 relative h-[50vh]">
      <BentoCard
        src="videos/art.mkv"
        title={
          <>
            best <b>RPG</b> Game
          </>
        }
        description="Metaphor: ReFantazio – Studio Zero / Sega"
        isComingSoon
      />
    </BentoTilt>
  </div>

  <div className="col-span-12 md:col-span-4">
    <BentoTilt className="bento-tilt_2 relative h-[50vh]">
      <BentoCard
        src="videos/hellblade.mkv"
        title={
          <>
            best <b>Performance</b>
          </>
        }
        description="Melina Juergens as Senua – Senua's Saga: Hellblade II"
        isComingSoon
      />
    </BentoTilt>
  </div>

  <div className="col-span-12 md:col-span-4">
    <BentoTilt className="bento-tilt_2 relative h-[50vh]">
      <BentoCard
        src="videos/fifa.mkv"
        title={
          <>
            best <b>Sports</b> Game
          </>
        }
        description="EA FC 25"
        isComingSoon
      />
    </BentoTilt>
  </div>

  {/* Full-Width Section */}
  
</div>

      

      
    </div>
  </section>
);

export default Features;

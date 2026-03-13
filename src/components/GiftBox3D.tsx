interface GiftBox3DProps {
  isOpened: boolean;
  onClick: () => void;
  imageSrc: string;
}

const GiftBox3D = ({ isOpened, onClick, imageSrc }: GiftBox3DProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer h-72 transition-transform duration-300 hover:scale-105"
    >
      {!isOpened ? (
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-transparent">
          <div className="relative text-8xl md:text-[10rem] animate-bounce drop-shadow-2xl">🎁</div>
        </div>
      ) : (
        <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-xl shadow-2xl border-2 border-gray-200 flex items-center justify-center overflow-hidden animate-scaleIn">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white"></div>
          <img
            src={imageSrc}
            alt="My photo"
            className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-lg relative z-10 shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default GiftBox3D;

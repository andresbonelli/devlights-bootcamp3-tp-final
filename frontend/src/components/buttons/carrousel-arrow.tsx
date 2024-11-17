import ArrowIcon from "../shapes/arrow";

interface CarrouselArrowProps {
  isDisabled?: boolean;
  onPress: () => void;
  xOffset: string;
  direction: "rotate-90" | "-rotate-90" | "" | "rotate-180";
}

export default function CarrouselArrow({
  isDisabled,
  onPress,
  xOffset,
  direction,
}: CarrouselArrowProps) {
  return (
    <div
      className={`hidden sm:block absolute ${xOffset}  top-1/2 flex -translate-y-1/2 transform justify-between `}
    >
      <button
        disabled={isDisabled}
        className={`bg-white rounded-full shadow-lg opacity-70
                    active:opacity-70 hover:opacity-85  
                    ${direction} ${isDisabled && "hidden"}`}
        onClick={() => onPress()}
      >
        <ArrowIcon width={40} height={40} fill="gray-300" />
      </button>
    </div>
  );
}

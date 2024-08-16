import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  InputHTMLAttributes,
} from "react";

interface PriceSliderInterface {
  min: number;
  max: number;
  onChange: any;
}

const PriceSlider: React.FC<PriceSliderInterface> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="h-12 flex items-center justify-center z-10">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          console.log(event.target.value, ">>>");
          setMinVal(value);
          minValRef.current = value;
        }}
        className="absolute h-0 w-[200px] outline-none bg-white z-20"
        // style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="absolute h-0 w-[200px] outline-none bg-white  z-20"
      />

      <div className="relative w-[200px] z-0 h-[5px]">
        <div className="absolute w-full h-[5px] bg-gray-300 rounded z-0" />
        <div
          ref={range}
          className="absolute h-[5px] bg-primary-blue rounded z-0"
        />
        <div className="absolute text-gray-400 text-[12px] mt-[20px] left-[6px]">
          {minVal}
        </div>
        <div className="absolute text-gray-400 text-[12px] mt-[20px] -right-[4px]">
          {maxVal}
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;

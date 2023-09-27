import { formatTime } from "../func";
import { StyledProgressInput } from "./progressBar.style";

export default function ProgressBar({ currentTime, duration, onSeek }) {
  const currentTimeFormatted = formatTime(currentTime);
  const durationFormatted = formatTime(duration);

  const handleSeek = (e) => {
    const percent = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    const seekTime = percent * duration;
    onSeek(seekTime);
  };

  return (
    <div>
      <StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        $color="#B672FF"
        style={{ width: `100%` }}
        onClick={handleSeek}
      />
      <div className="timeDisplay">
        <span>{currentTimeFormatted}</span> / <span>{durationFormatted}</span>
      </div>
    </div>
  );
}

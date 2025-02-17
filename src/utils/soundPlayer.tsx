import clickSoundFile from "../assets/click1.wav";
import clickSoundFileTwo from "../assets/click2.wav";
import hoverSoundFile from "../assets/hover.wav";

export const playClickSound = () => {
  const audio = new Audio(clickSoundFile);
  audio.play().catch(error => console.error("Error playing audio:", error));
};

export const playClickSoundTwo = () => {
  const audio = new Audio(clickSoundFileTwo);
  audio.play().catch(error => console.error("Error playing audio:", error));
}

export const playHoverSound = () => {
  const audio = new Audio(hoverSoundFile);
  audio.currentTime = 0;
  audio.play().catch((error) => console.error("Error playing sound:", error));
};
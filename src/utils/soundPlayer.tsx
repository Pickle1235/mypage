import clickSoundFile from "../assets/click_sound.mp3";
import hoverSoundFile from "../assets/star.wav";

export const playClickSound = () => {
  const audio = new Audio(clickSoundFile);
  audio.play().catch(error => console.error("Error playing audio:", error));
};

export const playHoverSound = () => {
  const audio = new Audio(hoverSoundFile);
  audio.currentTime = 0;
  audio.play().catch((error) => console.error("Error playing sound:", error));
};
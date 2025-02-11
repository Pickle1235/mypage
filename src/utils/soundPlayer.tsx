import soundFile from "../assets/click_sound.mp3";

export const playSound = () => {
  const audio = new Audio(soundFile);
  audio.play().catch(error => console.error("Error playing audio:", error));
};
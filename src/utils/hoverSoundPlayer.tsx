import soundFile from "../assets/star.wav";

export const playHoverSound = () => {
    const audio = new Audio(soundFile);
    audio.currentTime = 0;
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };
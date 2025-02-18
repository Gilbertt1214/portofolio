import { useEffect } from "react";
import { Howl } from "howler";

const BackgroundMusic = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["/src/assets/background-music.mp3"], // Pastikan path benar
      loop: true, // Musik akan mengulang terus
      volume: 0.5, // Set volume 50%
      autoplay: true, // Coba autoplay
      mute: false
    });

    sound.play();

    return () => {
      sound.stop(); // Stop musik jika komponen di-unmount
    };
  }, []);

  return null; // Tidak perlu ada elemen UI, hanya menjalankan musik
};

export default BackgroundMusic;

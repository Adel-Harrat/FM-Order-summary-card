import "./App.css";
import hero from "./assets/illustration-hero.svg";
import mobilePattern from "./assets/pattern-background-mobile.svg";
import iconMusic from "./assets/icon-music.svg";
import desktopPattern from "./assets/pattern-background-desktop.svg";

const App = () => {
  return (
    <div className="font-primary min-h-screen bg-primary-pale grid place-items-center relative">
      <img
        src={mobilePattern}
        alt="wave background image for mobile devices"
        className="absolute top-0 left-0 md:hidden"
      />
      <img
        src={desktopPattern}
        alt="wave background image for desktop devices"
        className="absolute top-0 left-0 hidden md:block"
      />
      <main className="rounded-2xl overflow-hidden bg-white drop-shadow-2xl mx-5 max-w-sm">
        <section>
          <img src={hero} alt="Illustration of a girl enjoying music" />
        </section>

        <section className="text-center">
          <h1 className="mt-8 text-2xl font-[900] text-neutral-dark">
            Order Summary
          </h1>
          <p className="text-neutral-desaturated px-8 mt-4">
            You can now listen to millions <br className="md:hidden" />
            of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
        </section>

        <section className="flex items-center justify-between mx-5 bg-neutral-pale px-5 mt-6 py-4 rounded-xl space-x-4">
          <div>
            <img src={iconMusic} alt="a music icon" />
          </div>

          <div className="flex-1">
            <h2 className="text-neutral-dark font-[700]">Annual Plan</h2>
            <p className="text-neutral-desaturated">$59.99/year</p>
          </div>

          <div>
            <button className="underline text-primary-bright text-sm font-[700] hover:opacity-70 transition duration-300 hover:no-underline">
              Change
            </button>
          </div>
        </section>

        <footer className="flex flex-col space-y-6 mx-5 mt-6 mb-8">
          <button className="rounded-xl bg-primary-bright text-white font-[700] py-4 drop-shadow-2xl hover:bg-opacity-70 transition duration-300">
            Proceed to Payment
          </button>

          <button className="text-neutral-desaturated font-[700] hover:text-neutral-dark transition duration-300">
            Cancel Order
          </button>
        </footer>
      </main>
    </div>
  );
};

export default App;

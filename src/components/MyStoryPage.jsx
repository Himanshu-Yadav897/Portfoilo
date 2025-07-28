import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Improved sticky scroll-based text reveal component
const StickyTextReveal = ({ children, className = "", height = "100vh" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.7"],
  });

  if (typeof children !== "string") {
    return <div className={className}>{children}</div>;
  }

  const words = children.split(" ");

  return (
    <div
      ref={containerRef}
      className={`relative ${height === "100vh" ? "h-[80vh]" : height}`}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <div className={`text-center max-w-4xl leading-tight ${className}`}>
          <span className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1.2 / words.length;
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.15, 1]
              );

              return (
                <span key={i} className="relative inline-block">
                  <span className="absolute inset-0 opacity-15 text-gray-500">
                    {word}
                  </span>
                  <motion.span style={{ opacity }} className="relative">
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

// Text reveal component
const TextReveal = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay }}
        className={`text-lg md:text-xl lg:text-2xl leading-relaxed ${className}`}
      >
        {text}
      </motion.div>
    </div>
  );
};

// Progress indicator component
const StoryProgress = ({ chapters, currentChapter }) => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {chapters.map((chapter, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentChapter
                  ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                  : "bg-gray-600"
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors ${
                index === currentChapter ? "text-blue-400" : "text-gray-500"
              }`}
            >
              {chapter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HimanshuStoryPage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const { scrollY } = useScroll();

  const chapters = [
    "The Copy-Paste Dream",
    "The ₹27,000 Lesson",
    "Taking It Personally",
    "6-7 Hours a Day",
    "The DSA Struggle",
    "Building Real Things",
    "Becoming Great",
  ];

  // Track scroll progress for chapter updates
  useEffect(() => {
    const updateChapter = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const chapterIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentChapter(Math.min(chapterIndex, chapters.length - 1));
    };

    window.addEventListener("scroll", updateChapter);
    return () => window.removeEventListener("scroll", updateChapter);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Story Progress */}
      <StoryProgress chapters={chapters} currentChapter={currentChapter} />

      {/* Introduction */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-900 via-blue-950 to-purple-950">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Hey, I'm Himanshu.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            This is my story — raw, honest, and still being written.
          </motion.div>
        </div>
      </section>

      {/* Chapter 1: The Copy-Paste Dream */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-purple-950 via-blue-950 to-black">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Chapter 1: The Copy-Paste Dream
          </motion.h1>

          <TextReveal
            text="In 2nd grade, our teacher asked:"
            className="text-gray-300"
          />

          <TextReveal
            text="What do you want to be when you grow up?"
            className="text-blue-400 text-2xl md:text-3xl font-semibold italic"
            delay={0.3}
          />

          <TextReveal
            text="My best friend said,"
            className="text-gray-300"
            delay={0.6}
          />

          <TextReveal
            text="Software Developer, like my uncle."
            className="text-green-400 text-xl md:text-2xl"
            delay={1}
          />

          <TextReveal
            text="I copied his answer —"
            className="text-gray-300"
            delay={1.3}
          />

          <StickyTextReveal
            className="text-yellow-400 font-medium text-2xl md:text-3xl lg:text-4xl"
            height="h-[80vh]"
          >
            and somehow, that word stuck with me.
          </StickyTextReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="pt-8"
          >
            {/* <div className="text-6xl md:text-8xl">👶</div> */}
            <p className="text-gray-400 mt-4">
              Sometimes the best decisions start with copying...
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: The ₹27,000 Lesson */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-black via-red-950 to-gray-900">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Chapter 2: The ₹27,000 Lesson
          </motion.h1>

          <TextReveal
            text="In our first year of college,"
            className="text-gray-300"
          />

          <TextReveal
            text="we tried launching a startup."
            className="text-blue-400"
            delay={0.3}
          />

          <TextReveal
            text="We paid someone"
            className="text-gray-300"
            delay={0.6}
          />

          <TextReveal
            text="₹27,000"
            className="text-red-400 text-3xl md:text-4xl font-bold"
            delay={1}
          />

          <TextReveal
            text="to build us an e-commerce site — in WordPress."
            className="text-orange-400"
            delay={1.4}
          />

          <div className="py-8">
            <TextReveal
              text="The startup failed."
              className="text-red-500 text-2xl font-bold"
              delay={2}
            />
            <TextReveal
              text="So did the website."
              className="text-red-500 text-2xl font-bold"
              delay={2.3}
            />
          </div>

          <TextReveal
            text="It broke me financially, and it taught me something important:"
            className="text-gray-400"
            delay={2.6}
          />

          <StickyTextReveal
            className="text-cyan-400 text-2xl md:text-3xl lg:text-4xl font-bold"
            height="h-[70vh]"
          >
            If I ever build again, I want to build it myself.
          </StickyTextReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pt-8"
          >
            <div className="text-6xl md:text-8xl">💸</div>
            <p className="text-red-400 mt-4 font-medium">
              ₹27,000 down the drain, but the lesson was priceless
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: Taking It Personally */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
          >
            Chapter 3: Taking It Personally
          </motion.h1>

          <TextReveal
            text="When the startup failed,"
            className="text-gray-300"
          />

          <TextReveal
            text="my school friend — the same one I copied in 2nd grade —"
            className="text-gray-400"
            delay={0.5}
          />

          <TextReveal
            text="told me I wasn't meant for coding."
            className="text-red-400 text-xl md:text-2xl"
            delay={1}
          />

          <TextReveal
            text="Even a college friend said,"
            className="text-gray-300"
            delay={1.5}
          />

          <TextReveal
            text="You're just a BCA student — this isn't for you."
            className="text-red-400 text-xl md:text-2xl italic"
            delay={2}
          />

          <StickyTextReveal
            className="text-orange-400 text-3xl md:text-4xl lg:text-5xl font-bold"
            height="h-[75vh]"
          >
            I took that personally.
          </StickyTextReveal>

          <TextReveal
            text="So I stopped explaining myself."
            className="text-gray-300"
            delay={0.2}
          />

          <TextReveal
            text="I joined a library."
            className="text-blue-400"
            delay={0.5}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <div className="text-6xl md:text-8xl">📚</div>
            <p className="text-blue-400 mt-4 font-medium">
              Time to prove them wrong
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: 6-7 Hours a Day */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-black via-blue-950 to-green-900">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
          >
            Chapter 4: 6-7 Hours a Day
          </motion.h1>

          <TextReveal
            text="Studied 6–7 hours a day."
            className="text-blue-400 text-xl md:text-2xl font-bold"
          />

          <TextReveal
            text="Failed to finish my course — twice."
            className="text-red-400"
            delay={0.5}
          />

          <TextReveal
            text="Gave up on backend once."
            className="text-red-400"
            delay={0.8}
          />

          <StickyTextReveal
            className="text-green-400 text-2xl md:text-3xl lg:text-4xl font-bold"
            height="h-[70vh]"
          >
            But I didn't give up on myself.
          </StickyTextReveal>

          <div className="py-4 space-y-4">
            <TextReveal
              text="I kept coming back —"
              className="text-gray-300"
              delay={0.2}
            />
            <TextReveal
              text="not because it was fun,"
              className="text-gray-400"
              delay={0.5}
            />
            <TextReveal
              text="but because I had no choice."
              className="text-orange-400 font-medium"
              delay={0.8}
            />
          </div>

          <StickyTextReveal
            className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl font-bold"
            height="h-[70vh]"
          >
            This is what I want.
          </StickyTextReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-8"
          >
            <div className="text-6xl md:text-8xl">💪</div>
            <p className="text-green-400 mt-4 font-medium">
              Persistence over perfection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 5: The DSA Struggle */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-green-900 via-purple-800 to-red-900">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-green-400 via-purple-400 to-red-400 bg-clip-text text-transparent"
          >
            Chapter 5: The DSA Struggle
          </motion.h1>

          <TextReveal
            text="I still remember when I started learning DSA."
            className="text-gray-300"
          />

          <TextReveal
            text="I didn't 'get it' the first time."
            className="text-red-400"
            delay={0.5}
          />

          <TextReveal
            text="Or the second."
            className="text-red-400"
            delay={0.8}
          />

          <TextReveal
            text="I gave up so many times, but I kept coming back."
            className="text-orange-400 font-medium"
            delay={1.2}
          />

          <StickyTextReveal
            className="text-purple-400 text-xl md:text-2xl lg:text-3xl"
            height="h-[75vh]"
          >
            Arrays, recursion, dynamic programming — it all felt like a wall. But I kept climbing.
          </StickyTextReveal>

          <div className="py-4 space-y-4">
            <TextReveal
              text="Even now, I'm learning advanced graphs."
              className="text-blue-400 font-semibold"
              delay={0.2}
            />
            <TextReveal
              text="Still struggling."
              className="text-red-400"
              delay={0.5}
            />
            <TextReveal
              text="Still showing up."
              className="text-green-400 font-bold text-xl"
              delay={0.8}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-8"
          >
            <div className="text-6xl md:text-8xl">🧗‍♂️</div>
            <p className="text-purple-400 mt-4 font-medium">
              Every wall becomes a stepping stone
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 6: Building Real Things */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-red-900 via-blue-800 to-purple-900">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Chapter 6: Building Real Things
          </motion.h1>

          <TextReveal
            text="And now, I'm building real projects,"
            className="text-blue-400 text-xl"
          />

          <TextReveal
            text="helping others debug,"
            className="text-green-400"
            delay={0.5}
          />

          <StickyTextReveal
            className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-medium"
            height="h-[75vh]"
          >
            and chasing curiosity like it's my fuel.
          </StickyTextReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-8"
          >
            <div className="text-6xl md:text-8xl">🔥</div>
            <p className="text-yellow-400 mt-4 font-medium">
              Curiosity is the ultimate fuel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 7: Becoming Great */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-purple-900 via-blue-800 to-black">
        <div className="max-w-4xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Chapter 7: Becoming Great
          </motion.h1>

          <TextReveal
            text="I don't just want to write code."
            className="text-gray-300"
          />

          <TextReveal
            text="I want to write it well —"
            className="text-blue-400 text-xl md:text-2xl"
            delay={0.5}
          />

          <TextReveal
            text="with focus, consistency, and pride."
            className="text-purple-400 font-medium"
            delay={1}
          />

          <div className="py-6">
            <TextReveal
              text="Because I'm not just here to be a developer."
              className="text-gray-300 text-xl"
              delay={1.5}
            />
            <StickyTextReveal
              className="text-cyan-400 text-2xl md:text-3xl lg:text-4xl font-bold"
              height="h-[70vh]"
            >
              I'm here to become a great one.
            </StickyTextReveal>
          </div>

          <StickyTextReveal
            className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-medium italic"
            height="h-[75vh]"
          >
            It took longer than I planned, but I never stopped moving.
          </StickyTextReveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-8 space-y-6"
          >
            <div className="text-6xl md:text-8xl">⭐</div>
            <p className="text-cyan-400 text-xl font-bold">
              The story continues...
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every line of code, every debugging session, every small victory — 
              it's all part of raising the bar to become a better developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                See My Work
              </button>
              <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-black transition-all duration-300">
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HimanshuStoryPage;
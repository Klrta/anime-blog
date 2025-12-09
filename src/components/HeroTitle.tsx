'use client';

import Typewriter from 'typewriter-effect';

export default function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight h-20">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('欢迎来到伊蕾娜的小窝')
            .pauseFor(2500)
            .deleteAll()
            .typeString('记录二次元生活')
            .pauseFor(2500)
            .deleteAll()
            .typeString('分享编程学习')
            .pauseFor(2500)
            .deleteAll()
            .typeString('欢迎来到伊蕾娜的小窝')
            .start();
        }}
        options={{
          autoStart: true,
          loop: false, // 关闭循环
          delay: 75,
        }}
      />
    </h1>
  );
}

export default function ScrollingBackground() {
  // 这里放你的图片路径，可以重复多次以填满屏幕
  // 建议找 8-12 张不同的图，然后重复几次
  const images = [
    '/bg.jpg', '/avatar.jpg', '/bg1.jpg', '/avatar1.jpg',
    '/bg2.jpg', '/avatar2.jpg', '/bg3.jpg', '/avatar3.jpg',
    '/bg4.jpg', '/avatar4.jpg', '/bg5.jpg', '/avatar5.jpg',
    '/bg6.jpg', '/avatar6.jpg', '/bg7.jpg', '/avatar7.jpg',
  ];

  return (
    <div className="scrolling-bg">
      {/* 我们需要两组同样的图片来实现无缝连接 */}
      <div className="scrolling-content">
        {/* 第一组 */}
        {images.map((src, index) => (
          <div key={`g1-${index}`} className="aspect-video rounded-lg overflow-hidden">
            <img src={src} className="w-full h-full object-cover" alt="bg" />
          </div>
        ))}
        {/* 第二组 (克隆一份，用于无缝衔接) */}
        {images.map((src, index) => (
          <div key={`g2-${index}`} className="aspect-video rounded-lg overflow-hidden">
            <img src={src} className="w-full h-full object-cover" alt="bg" />
          </div>
        ))}
      </div>
    </div>
  );
}
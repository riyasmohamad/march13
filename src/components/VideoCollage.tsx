const VideoCollage = () => {
  const contentItems = [
    { type: 'video', src: '/images/1.mp4', span: 'col-span-1 md:col-span-2 row-span-2' },
    { type: 'video', src: '/images/IMG_0_(1).MOV', span: 'col-span-1 md:col-span-1 row-span-2' },
    { type: 'video', src: '/images/2.mp4', span: 'col-span-2 md:col-span-2 row-span-1' },
    { type: 'video', src: '/images/3.mp4', span: 'col-span-1 md:col-span-1 row-span-1' },
    { type: 'text', content: 'With you, everything feels right', span: 'col-span-2 md:col-span-3 row-span-1' },
    { type: 'video', src: '/images/IMG_0_(2).MOV', span: 'col-span-1 md:col-span-1 row-span-2' },
    { type: 'video', src: '/images/4.mp4', span: 'col-span-1 md:col-span-2 row-span-1' },
    { type: 'video', src: '/images/VID_112680802_044721_187.mp4', span: 'col-span-1 md:col-span-1 row-span-1' },
    { type: 'video', src: '/images/VN20230227_150153.mp4', span: 'col-span-2 md:col-span-2 row-span-2' },
    { type: 'video', src: '/images/IMG_0_(7).MOV', span: 'col-span-1 md:col-span-1 row-span-1' },
    { type: 'video', src: '/images/VID-20230919-WA0112.mp4', span: 'col-span-1 md:col-span-1 row-span-1' },
    { type: 'video', src: '/images/IMG_2856.MP4', span: 'col-span-1 md:col-span-1 row-span-1' },
  ];

  return (
    <section className="py-12 px-2 md:px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cursive text-4xl md:text-5xl text-center text-pink-600 mb-12 animate-fadeIn">
          Our Moments 🎬
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 auto-rows-[120px] md:auto-rows-[180px] lg:auto-rows-[220px] grid-flow-dense">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${item.span} flex items-center justify-center`}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-white flex items-center justify-center shadow-inner">
                  <h3 className="font-sans text-xl md:text-3xl lg:text-4xl tracking-[0.2em] font-bold text-gray-800 uppercase px-4 text-center">
                    {item.content}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCollage;

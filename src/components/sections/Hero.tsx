import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Animation variables
    let animationFrameId: number;
    const wavePoints: { x: number; y: number; originalY: number; speed: number }[] = [];
    const waveCount = Math.floor(canvas.width / 50);
    
    // Initialize wave points
    for (let i = 0; i < waveCount; i++) {
      wavePoints.push({
        x: i * (canvas.width / waveCount),
        y: canvas.height / 2,
        originalY: canvas.height / 2,
        speed: 0.05 + Math.random() * 0.05
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw waves
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let i = 0; i < wavePoints.length; i++) {
        const point = wavePoints[i];
        point.y = point.originalY + Math.sin(Date.now() * 0.001 * point.speed) * 15;
        
        if (i === 0) {
          ctx.lineTo(point.x, point.y);
        } else {
          const prevPoint = wavePoints[i - 1];
          const xc = (prevPoint.x + point.x) / 2;
          const yc = (prevPoint.y + point.y) / 2;
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
        }
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 31, 84, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 31, 84, 0.02)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Commanding Conversations. Measurable Results.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From national fundraising to commercial conquest — SIG Solutions is the engine behind South Africa's most successful outreach campaigns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Start a Campaign
            </a>
            <a href="#case-studies" className="btn btn-secondary">
              See Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

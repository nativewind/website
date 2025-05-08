'use client';

import { useEffect, useRef } from 'react';

export default function VectorField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouse = useRef<{ x: number | null; y: number | null; radius: number }>({ x: null, y: null, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas !== null) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let particles: { x: number; y: number; age: number; }[] = [];
        const numParticles = 1000;

        canvas.width = width;
        canvas.height = height;


        window.addEventListener('resize', resize);
        function resize() {
          if(!canvas) return; 
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width;
          canvas.height = height;
        }

        window.addEventListener('mousemove', (e) => {
          if (mouse && mouse.current && canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect(); // Get canvas bounds
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
          
            mouse.current.x = mouseX;
            mouse.current.y = mouseY;
          }
        });
    
        window.addEventListener('mouseout', () => {
          mouse.current.x = null;
          mouse.current.y = null;
        });
    

        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            age: Math.random() * 100
          });
        }

        // v1
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.002;
        //   const angle = Math.sin(x * scale + t * 0.0005) * Math.cos(y * scale + t * 0.0003) * Math.PI * 2;
        //   return {
        //     vx: Math.cos(angle),
        //     vy: Math.sin(angle)
        //   };
        // }

        // v2 (lame)
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.002;
        //   const noiseStrength = 3;
        
        //   // Layered trigonometric flow field
        //   const nx = Math.sin((x + t * 0.02) * scale) + Math.cos((y - t * 0.015) * scale * 1.3);
        //   const ny = Math.cos((y + t * 0.025) * scale) + Math.sin((x - t * 0.018) * scale * 0.7);
        
        //   const angle = Math.atan2(ny, nx); // Converts flow to angle
        //   return {
        //     vx: Math.cos(angle) * noiseStrength,
        //     vy: Math.sin(angle) * noiseStrength
        //   };
        // }

        // v2 + cursor
        // function vectorField(x: number, y: number, t: number, centerX: number, centerY: number) {
        //   const scale = 0.002;
        //   const noiseStrength = 3;
        
        //   // Shift x/y relative to the center (cursor)
        //   const dx = x - centerX;
        //   const dy = y - centerY;
        
        //   // Layered trigonometric flow field, but around (centerX, centerY)
        //   const nx = Math.sin((dx + t * 0.02) * scale) + Math.cos((dy - t * 0.015) * scale * 1.3);
        //   const ny = Math.cos((dy + t * 0.025) * scale) + Math.sin((dx - t * 0.018) * scale * 0.7);
        
        //   const angle = Math.atan2(ny, nx); // Converts flow to angle

        //   const dist = Math.sqrt(dx * dx + dy * dy);
        //   // const falloff = Math.max(0, 1 - dist / 300); // strong near, fades at 300px
        //   // const strength = noiseStrength * falloff;

        //   return {
        //     vx: Math.cos(angle) * noiseStrength,
        //     vy: Math.sin(angle) * noiseStrength
        //   };
          
        // }

        // v2.5
        // function vectorField(x: number, y: number, t: number, centerX: number, centerY: number) {
        //   const scale = 0.002;
        //   const noiseStrength = 3;
        
        //   // Base flow field (global, ambient noise)
        //   const nx = Math.sin((x + t * 0.02) * scale) + Math.cos((y - t * 0.015) * scale * 1.3);
        //   const ny = Math.cos((y + t * 0.025) * scale) + Math.sin((x - t * 0.018) * scale * 0.7);
        
        //   const baseAngle = Math.atan2(ny, nx);
        //   let vx = Math.cos(baseAngle) * noiseStrength;
        //   let vy = Math.sin(baseAngle) * noiseStrength;
        
        //   // Swirl effect near cursor
        //   const dx = x - centerX;
        //   const dy = y - centerY;
        //   const distSq = dx * dx + dy * dy;
        //   const maxDist = 150; // radius of influence
        //   if (distSq < maxDist * maxDist) {
        //     const dist = Math.sqrt(distSq);
        //     const strength = (1 - dist / maxDist) * 5.0; // Stronger swirl near center
        
        //     // Tangential (perpendicular) swirl
        //     const swirlX = -dy / dist;
        //     const swirlY = dx / dist;
        
        //     vx += swirlX * strength;
        //     vy += swirlY * strength;
        //   }
        
        //   return { vx, vy };
        // }
        
        // v2.8 (only cursor swirl)
        // function vectorField(x: number, y: number, t: number, centerX: number, centerY: number) {
        //   const swirlRadius = 150; // radius of swirl influence
        //   const swirlStrength = 4.0; // how strong the swirl is
        //   const driftSpeed = 0.1; // very small background drift
        
        //   let vx = 0;
        //   let vy = 0;
        
        //   if (centerX !== null && centerY !== null) {
        //     const dx = x - centerX;
        //     const dy = y - centerY;
        //     const distSq = dx * dx + dy * dy;
        
        //     if (distSq < swirlRadius * swirlRadius) {
        //       const dist = Math.sqrt(distSq) || 0.001; // prevent divide-by-zero
        //       const strength = (1 - dist / swirlRadius) * swirlStrength;
        
        //       // Create a tangential vector (perpendicular to radial vector)
        //       vx = -dy / dist * strength;
        //       vy = dx / dist * strength;
        //     }
        //   }
        
        //   // Optional: add a tiny random drift to particles
        //   vx += (Math.random() - 0.5) * driftSpeed;
        //   vy += (Math.random() - 0.5) * driftSpeed;
        
        //   return { vx, vy };
        // }
        
        // v2.9
        // function vectorField(x: number, y: number, t: number, centerX: number, centerY: number) {
        //   const swirlStrength = 4.0;  // Max swirl speed
        //   const influenceRadius = 400; // Huge radius so it affects ~40% of particles
        //   const baseFlowAngle = Math.PI / 8; // general wind direction (22.5 degrees)
        //   const baseFlowSpeed = 0.2;
        
        //   // Base gentle flow
        //   let vx = Math.cos(baseFlowAngle) * baseFlowSpeed;
        //   let vy = Math.sin(baseFlowAngle) * baseFlowSpeed;
        
        //   if (centerX !== null && centerY !== null) {
        //     const dx = x - centerX;
        //     const dy = y - centerY;
        //     const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        
        //     if (dist < influenceRadius) {
        //       const strength = (1 - dist / influenceRadius) * swirlStrength;
        
        //       const swirlX = -dy / dist;
        //       const swirlY = dx / dist;
        
        //       vx += swirlX * strength;
        //       vy += swirlY * strength;
        //     }
        //   }
        
        //   return { vx, vy };
        // }
        // v2.95 (2 centers)
        function vectorField(x: number, y: number, t: number, centerX: number, centerY: number, canvasWidth: number, canvasHeight: number) {
          const swirlStrengthMouse = 4.0;
          const swirlStrengthCenter = 2.0;
        
          const influenceRadiusMouse = 400; // large radius for mouse swirl
          const influenceRadiusCenter = 600; // center swirl is even bigger
        
          const baseFlowAngle = Math.PI / 9; // general drift direction
          const baseFlowSpeed = 0.2;
        
          // Start with gentle drift
          let vx = Math.cos(baseFlowAngle) * baseFlowSpeed;
          let vy = Math.sin(baseFlowAngle) * baseFlowSpeed;
        
          // ---- Swirl around mouse ----
          if (centerX !== null && centerY !== null) {
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        
            if (dist < influenceRadiusMouse) {
              const strength = (1 - dist / influenceRadiusMouse) * swirlStrengthMouse;
        
              // Standard vortex: clockwise
              const swirlX = -dy / dist;
              const swirlY = dx / dist;
        
              vx += swirlX * strength;
              vy += swirlY * strength;
            }
          }
        
          // ---- Swirl around center ----
          const canvasCenterX = canvasWidth / 2;
          const canvasCenterY = canvasHeight / 2;
        
          const dxc = x - canvasCenterX;
          const dyc = y - canvasCenterY;
          const distCenter = Math.sqrt(dxc * dxc + dyc * dyc) || 0.001;
        
          if (distCenter < influenceRadiusCenter) {
            const strengthCenter = (1 - distCenter / influenceRadiusCenter) * swirlStrengthCenter;
        
            // Opposite vortex: counter-clockwise
            const swirlXCenter = dyc / distCenter;  // notice the flipped sign compared to above
            const swirlYCenter = -dxc / distCenter;
        
            vx += swirlXCenter * strengthCenter;
            vy += swirlYCenter * strengthCenter;
          }
        
          return { vx, vy };
        }
        

        // v3 noise
        // function vectorField(x: number, y: number, t: any) {
        //   const scale = 0.009;
        //   const eps = 1;
        
        //   // Add more variation with faster-moving waves
        //   const scalarField = (x: number, y: number, t: number) =>
        //     Math.sin((x * scale + t * 0.002)) * Math.cos((y * scale + t * 0.002)) +
        //     Math.sin((y * scale * 0.7 + t * 0.001)) * Math.cos((x * scale * 0.5 + t * 0.0015));
        
        //   const dx = scalarField(x + eps, y, t) - scalarField(x - eps, y, t);
        //   const dy = scalarField(x, y + eps, t) - scalarField(x, y - eps, t);
        
        //   // Curl vector (perpendicular to gradient)
        //   return {
        //     vx: dy * 5, // Amplify result for stronger motion
        //     vy: -dx * 5
        //   };
        // }

        // v4 wiggles
        // function vectorField(x: number, y: number, t: number) {
        //   const scale = 0.004;
        //   const eps = 1;
        //   const speed = 0.002;
        
        //   // Random-looking coefficients for layered field
        //   const a = 1.37, b = 2.18, c = 0.83, d = 1.11;
        //   const tx = t * speed, ty = t * speed;
        
        //   // Layered pseudo-noise field
        //   const scalar = (x: number, y: number, t: any) =>
        //     Math.sin((x * scale + tx) * a + Math.cos((y * scale + ty) * b)) +
        //     Math.cos((y * scale + ty) * c + Math.sin((x * scale + tx) * d)) +
        //     Math.sin((x * scale - y * scale + tx) * 0.5);
        
        //   // Finite difference to simulate curl
        //   const dx = scalar(x + eps, y, t) - scalar(x - eps, y, t);
        //   const dy = scalar(x, y + eps, t) - scalar(x, y - eps, t);
        
        //   // Return perpendicular gradient vector (like curl)
        //   const angle = 0.0005 * t;
        //   const cosA = Math.cos(angle);
        //   const sinA = Math.sin(angle);
        //   return {
        //     vx: dy * 4 * cosA - (-dx * 4) * sinA,
        //     vy: dy * 4 * sinA + (-dx * 4) * cosA
        //   };
        // }
        
        
        
        // v bursts
        // function vectorField(x, y, t) {
        //   if (!burstActive) return { vx: 0, vy: 0 };
        
        //   const dx = x - burstCenter.x;
        //   const dy = y - burstCenter.y;
        //   const dist = Math.sqrt(dx * dx + dy * dy);
        
        //   if (dist > burstRadius) return { vx: 0, vy: 0 };
        
        //   const scale = 0.002;
        //   const angle = Math.sin(x * scale + t * 0.0005) * Math.cos(y * scale + t * 0.0003) * Math.PI * 2;
        //   const influence = 1 - dist / burstRadius;
        
        //   return {
        //     vx: Math.cos(angle) * influence,
        //     vy: Math.sin(angle) * influence
        //   };
        // }
        

        function applyMouseForce(p: { x: any; y: any; age?: number; }) {
          if (mouse.current.x === null || mouse.current.y === null) return;
    
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
    
          if (dist < mouse.current.radius) {
            const force = (mouse.current.radius - dist) / mouse.current.radius;
            const angle = Math.atan2(dy, dx);
            const strength = force * 2.5; // strength of push
            p.x += Math.cos(angle) * strength;
            p.y += Math.sin(angle) * strength;
          }
        }
        
        // let burstActive = false;
        // let burstCenter = { x: width / 2, y: height / 2 };
        // let burstRadius = 200;

        // function triggerBurst() {
        //   burstActive = true;
        //   burstCenter = {
        //     x: Math.random() * width,
        //     y: Math.random() * height,
        //   };
        
        //   // End the burst after a few seconds
        //   setTimeout(() => {
        //     burstActive = false;
        //   }, 2000); // 2 seconds per burst
        // }
        
        // // Start a burst every 4–6 seconds
        // setInterval(triggerBurst, 4000 + Math.random() * 2000);

        function draw(t: any) {
          if (!ctx || !canvas) return;

          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.fillRect(0, 0, width, height);
          ctx.globalCompositeOperation = 'source-over'; // Reset mode

          // TODO: cleanup ghosting
          // ctx.save();
          // ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any transforms
          // ctx.clearRect(0, 0, width, height);
          // ctx.restore();

          
          for (let p of particles) {
            const centerX = mouse.current.x ?? width / 2;
            const centerY = mouse.current.y ?? height / 2;

            // const mouseX = mouse.current.x ?? width / 2;
            // const mouseY = mouse.current.y ?? height / 2;

            const v = vectorField(p.x, p.y, t, centerX, centerY, canvas.width, canvas.height);
            // const v = vectorField(p.x, p.y, t, mouseX, mouseY, canvas.width, canvas.height);
            // const v = vectorField(p.x, p.y, t);
            // p.x += v.vx * 25;
            // p.y += v.vy * 25;
            p.x += v.vx * 0.75;
            p.y += v.vy * 0.75;

            // applyMouseForce(p);

            p.age++;
            if (p.x < 0 || p.x > width || p.y < 0 || p.y > height || p.age > 100) {
              p.x = Math.random() * width;
              p.y = Math.random() * height;
              p.age = 0;
            }

            // Speed coloring:
            const speed = Math.sqrt(v.vx * v.vx + v.vy * v.vy);
            const speedNorm = Math.min(speed / 5.0, 1);

            const r = 128 * (1 - speedNorm); // Red decreases with speed
            const g = 128;
            const b = 128;

            ctx.fillStyle = `rgba(${r},${g},${b}, 0.5)`;

            // if (mouse.current.x && mouse.current.y) {
            //   const dx = p.x - mouse.current.x;
            //   const dy = p.y - mouse.current.y;
            //   const dist = Math.sqrt(dx * dx + dy * dy);
            //   // Check if particle is near the cursor
            //   if (dist < 100) {
            //     ctx.fillStyle = 'rgba(0, 255, 255, 1)'; // Glow cyan near mouse
            //   } else {
            //     // NOTE: highlights on hover
            //     // ctx.fillStyle = 'rgba(222, 222, 222, 0.8)'; // Default white trails
            //   ctx.fillStyle = 'rgba(128, 128, 128, 0.8)'; // Default white trails

            //   }
            // } else {
            //   ctx.fillStyle = 'rgba(128, 128, 128, 0.8)'; // Default white trails
            // }

            ctx.beginPath();
            ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }

          animationRef.current = requestAnimationFrame(draw);
        }

        animationRef.current = requestAnimationFrame(draw);

      }
    }
      return () => {
        // window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', () => {});
        window.removeEventListener('mouseout', () => {});
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
      };
  }, []);

  return (
    // [mask-image:linear-gradient(to_bottom,red,transparent_55%)]
    <canvas
      ref={canvasRef}
      className="absolute animate-fade-in top-0 left-0 w-screen h-screen -z-10 pointer-events-none [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center_top] [mask-composite:exclude] [mask-mode:alpha] [mask-origin:content-box] [mask-clip:content-box] [mask-border-mode:match-source] [mask-image:radial-gradient(red,transparent_80%)]"
    />
  );
}

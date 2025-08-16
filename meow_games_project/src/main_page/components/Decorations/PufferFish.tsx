import Spline from '@splinetool/react-spline';

export default function PufferFish() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/msjCdbLE6jF6pIYh/scene.splinecode"
        style={{
          position: 'absolute',
          top: '50%', 
          right: '80%',
          width: '300px',
          height: '300px',
          zIndex: 9999
        }}
      />
    </main>
  );
}

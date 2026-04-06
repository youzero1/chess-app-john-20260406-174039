import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Chess Board Container */}
      <div className="relative bg-wooden-bg rounded-lg p-4 shadow-2xl">
        {/* Chess Board */}
        <div className="relative bg-wooden-bg rounded-lg p-2">
          <div className="grid grid-cols-8 gap-0 border-4 border-amber-900 rounded">
            {Array.from({ length: 64 }).map((_, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const isLight = (row + col) % 2 === 0;
              
              // Chess pieces setup
              let piece = '';
              if (row === 1) piece = '♟'; // Black pawns
              if (row === 6) piece = '♙'; // White pawns
              if (row === 0 && (col === 0 || col === 7)) piece = '♜'; // Black rooks
              if (row === 7 && (col === 0 || col === 7)) piece = '♖'; // White rooks
              if (row === 0 && (col === 1 || col === 6)) piece = '♞'; // Black knights
              if (row === 7 && (col === 1 || col === 6)) piece = '♘'; // White knights
              if (row === 0 && (col === 2 || col === 5)) piece = '♝'; // Black bishops
              if (row === 7 && (col === 2 || col === 5)) piece = '♗'; // White bishops
              if (row === 0 && col === 3) piece = '♛'; // Black queen
              if (row === 7 && col === 3) piece = '♕'; // White queen
              if (row === 0 && col === 4) piece = '♚'; // Black king
              if (row === 7 && col === 4) piece = '♔'; // White king
              
              return (
                <div
                  key={index}
                  className={`w-12 h-12 flex items-center justify-center text-4xl ${
                    isLight ? 'bg-amber-100' : 'bg-amber-800'
                  }`}
                >
                  {piece}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Control Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55-2.27A1 1 0 0121 8.618v6.764a1 1 0 01-1.45.895L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
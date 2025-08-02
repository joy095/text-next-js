// app/page.tsx or pages/index.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageItem = {
  id: string;
  author: string;
  download_url: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=15');
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative w-full h-60 overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.download_url}
              alt={img.author}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          </div>
        ))}
      </div>
    </main>
  );
}

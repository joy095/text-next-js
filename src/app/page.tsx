'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageItem = {
  id: string;
  author: string;
  download_url: string;
};

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=15')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Tailwind Image Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={`https://picsum.photos/id/${img.id}/400/300`}
              alt={img.author}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.download_url}
              alt={selectedImage.author}
              width={1024}
              height={768}
              className="rounded-md w-full h-auto max-h-[75vh] object-contain"
              quality={100}
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Author: {selectedImage.author}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

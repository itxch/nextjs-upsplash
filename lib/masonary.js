import fs from 'fs';
import path from 'path';
import { exiftool } from 'exiftool-vendored';

const imageDirectory = path.join(process.cwd() + '/public/images');

export async function getAllImageInfo() {
  const imageNames = fs.readdirSync(imageDirectory);

  const allImageData = await Promise.all(
    imageNames.map(async (imageName) => {
      //Get image dimensions + type
      const imageInfo = await exiftool
        .read(`${imageDirectory}/${imageName}`)
        .then(({ ImageHeight, ImageWidth }) => {
          return { ImageHeight, ImageWidth };
        });

      return {
        path: imageName,
        height: imageInfo.ImageHeight,
        width: imageInfo.ImageWidth,
      };
    })
  );

  return {
    allImageData,
    imageDirectory,
  };
}

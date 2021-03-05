import fs from 'fs';
import path from 'path';
import { exiftool } from 'exiftool-vendored';

const imageDirectory = path.join(process.cwd() + '/public/images');
export async function getAllImageInfo() {
  // Get a list of images from their folder and return an object that has name and dimensions
  const imageNames = fs.readdirSync(imageDirectory);

  const allImageData = await Promise.all(
    imageNames.map(async (imageName) => {
      //Get image dimensions + type
      const info = await exiftool
        .read(`${imageDirectory}/${imageName}`)
        .then(({ ImageHeight, ImageWidth }) => {
          return { ImageHeight, ImageWidth };
        });

      return {
        path: imageName,
        height: info.ImageHeight,
        width: info.ImageWidth,
      };
    })
  );

  exiftool.end();
  return {
    allImageData,
    imageDirectory,
  };
}

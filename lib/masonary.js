import fs from 'fs';
import path from 'path';
import 'image-size';
import { promisify } from 'util';
const sizeOf = promisify(require('image-size'));

const imageDirectory = path.join(process.cwd() + '/public/images');
export async function getAllImageInfo() {
  // Get a list of images from their folder and return an object that has name and dimensions
  const imageNames = fs.readdirSync(imageDirectory);

  const allImageData = await Promise.all(
    imageNames.map(async (imageName) => {
      //Get image dimensions + type
      const info = await sizeOf(`${imageDirectory}/${imageName}`);

      return {
        path: imageName,
        ...info,
      };
    })
  );

  return {
    allImageData,
    imageDirectory,
  };
}

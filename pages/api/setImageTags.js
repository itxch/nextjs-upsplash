import { exiftool } from 'exiftool-vendored';

export async function setImageTags({ imagePath, label }) {
  // exiftool.write(
  //   `${imageDirectory}/${imageName}`,
  //   { 'Caption-Abstract': 'No original 2' },
  //   ['-overwrite_original']
  // );
  //icpt tags
  // Headline tag max 256 - will be used for alt tag
  //Caption-Abstract max 2000 - will be used for caption
  //Writer-Editor - will be used for username of person who made photo
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).send('HOOOOOHAAAAAA');
    const requestData = req.body;
    setImageTags(requestData);
  } else {
    res.status(404).send('404');
  }
}

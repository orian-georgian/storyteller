import { Images } from "../../../../constants";

import "./Pages.scss";

function generateRandomList(originalList, minSize, maxSize) {
  const result = [];
  const listCopy = [...originalList];

  const randomSize =
    Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

  while (result.length < randomSize && listCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * listCopy.length);
    result.push(listCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}

export default function Pages() {
  const randomImages = generateRandomList(Images, 1, 10);
  const isLargeList = randomImages.length > 6;
  const images = isLargeList ? randomImages.slice(0, 6) : randomImages;

  return (
    <div className="pages-list flex-box align-center">
      {images.map((image) => (
        <div className="image-container" key={image}>
          <img
            className="story-image"
            loading="lazy"
            src={image}
            alt="Story image"
          />
        </div>
      ))}
      {isLargeList && (
        <div className="extra-stories flex-box align-center justify-center font-size-14">
          +{randomImages.length - images.length}
        </div>
      )}
    </div>
  );
}

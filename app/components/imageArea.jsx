import styles from "../page.module.css";
import Image from "next/image";

const SmallImageTile = ({
  imageNumber,
  activeImageNumber,
  setActiveImageNumber,
}) => {
  return (
    <div
      className={`${styles.imageContainer} ${
        imageNumber == activeImageNumber ? styles.activeImageContainer : ""
      }`}
      onClick={() => setActiveImageNumber(imageNumber)}
    >
      <Image
        src={`/images/image-product-${imageNumber}-thumbnail.jpg`}
        alt="product image"
        width={100}
        height={100}
        className={`${styles.productImage} ${
          imageNumber == activeImageNumber ? styles.activeImage : ""
        }`}
      />
    </div>
  );
};

const ImageArea = ({
  activeImageNumber,
  setActiveImageNumber,
  handlePreviousImageNumber,
  handleNextImageNumber,
  setShowCarousel,
}) => {
  return (
    <>
      <Image
        src={`/images/image-product-${activeImageNumber}.jpg`}
        alt="product image"
        width={500}
        height={500}
        className={styles.productImage}
        onClick={() => {
          setShowCarousel(true);
        }}
      />

      <div className={styles.imageControlFabContainer}>
        <button
          className={styles.imageControlFab}
          onClick={handlePreviousImageNumber}
        >
          <Image
            src="/images/icon-previous.svg"
            alt="previous image"
            width={12}
            height={18}
          />
        </button>

        <button
          className={styles.imageControlFab}
          onClick={handleNextImageNumber}
        >
          <Image
            src="/images/icon-next.svg"
            alt="next image"
            width={12}
            height={18}
          />
        </button>
      </div>

      <div className={styles.smallImagesRow}>
        <SmallImageTile
          imageNumber={1}
          activeImageNumber={activeImageNumber}
          setActiveImageNumber={setActiveImageNumber}
        />

        <SmallImageTile
          imageNumber={2}
          activeImageNumber={activeImageNumber}
          setActiveImageNumber={setActiveImageNumber}
        />

        <SmallImageTile
          imageNumber={3}
          activeImageNumber={activeImageNumber}
          setActiveImageNumber={setActiveImageNumber}
        />

        <SmallImageTile
          imageNumber={4}
          activeImageNumber={activeImageNumber}
          setActiveImageNumber={setActiveImageNumber}
        />
      </div>
    </>
  );
};

export default ImageArea;

import Piece from "./Piece";

export default function ShatterImage({ imageURL, manualProgress }) {
  const pieces = [0, 1, 2, 3]; // 4 pieces per image

  return (
    <div
      style={{
        position: "relative",
        width: "280px",
        height: "280px",
      }}
    >
      {pieces.map((piece, index) => (
        <Piece
          key={index}
          pieceIndex={index}
          imageURL={imageURL}
          manualProgress={manualProgress}
        />
      ))}
    </div>
  );
}
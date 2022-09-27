import HogCard from "./HogCard";

function HogCardList({ hogs }) {
  const renderHogs = hogs.map((hog) => <HogCard key={hog.name} hog={hog} />);

  return <ul>{renderHogs}</ul>;
}

export default HogCardList;

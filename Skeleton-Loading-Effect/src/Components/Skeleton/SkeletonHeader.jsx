import "./SkeletonHeader.css";
const SkeletonHeader = () => {
  return (
    <>
      <header className="skeleton-nav">
        <h3 className="skeleton-logo"></h3>
        <ul className="skeleton-list">
          <li className="skeleton-item"></li>
          <li className="skeleton-item"></li>
          <li className="skeleton-item"></li>
          <li className="skeleton-item"></li>
        </ul>
      </header>
    </>
  );
};

export default SkeletonHeader;

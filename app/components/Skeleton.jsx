import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={305}
    viewBox="0 0 280 305"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="226" y="446" rx="0" ry="0" width="1" height="1" />
    <rect x="-6" y="13" rx="0" ry="0" width="290" height="165" />
    <rect x="24" y="196" rx="0" ry="0" width="155" height="20" />
    <rect x="25" y="238" rx="0" ry="0" width="212" height="17" />
    <rect x="294" y="243" rx="0" ry="0" width="74" height="37" />
    <rect x="7" y="278" rx="0" ry="0" width="119" height="38" />
    <rect x="147" y="276" rx="0" ry="0" width="129" height="29" />
  </ContentLoader>
);

export default MyLoader;

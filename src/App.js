// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./post";
import SideMenu from "./sideMenu";

function App() {
  const myPost = [
    { id: 1, title: "This is the first post", Body: "This is the first Body" },
    {
      id: 2,
      title: "This is the second post",
      Body: "This is the second Body",
    },
    { id: 3, title: "This is the third post", Body: "This is the third Body" },
    {
      id: 4,
      title: "This is the fourth post",
      Body: "This is the fourth Body",
    },
  ];
  const myPostList = myPost.map((post) => {
    return <Post key={post.id} title={post.title} Body={post.Body} />;
  });

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", width: "60%", margin: "0 auto" }}>
        <div style={{ width: "70%" }}>{myPostList}</div>
        <div style={{ width: "30%" }}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;

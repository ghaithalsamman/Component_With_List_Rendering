import Button from "./Button";
export default function SideMenu() {
  const myButton = [
    {
      id: 1,
      title: "آخر المقالات",
      ch: (
        <div>
          <img
            style={{ width: "90%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "الأكثر قراءة",
      ch: (
        <div>
          <img
            style={{ width: "90%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8L77K0UqWcA38ej4VsUuV8rzSvc4b3x1dQ&s"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "مميز",
      ch: (
        <div>
          <img
            style={{ width: "90%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s"
          />
        </div>
      ),
    },
  ];
  const myButtonList = myButton.map((butt) => {
    return (
      <Button key={butt.id} title={butt.title}>
        {butt.ch}
      </Button>
    )
  })
  return (
    <div
      style={{
        border: "solid teal 5px",
        margin: "25px",
      }}
    >
      {myButtonList}
    </div>
  )
}

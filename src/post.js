export default function Post({ title, Body }) {
  return (
    <div style={{ border: "solid teal 5px", margin: "25px" }}>
      <h2>{title}</h2>
      <hr></hr>
      <p>{Body}</p>
    </div>
  )
}

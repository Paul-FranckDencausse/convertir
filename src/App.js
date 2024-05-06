export default function TodoList() {
  //heureusement il existe des outils pour traduire en JSX
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
      <a href="https://transform.tools/html-to-jsx"> Pour convertir</a>
    </>
  );
}

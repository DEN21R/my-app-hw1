function ListsComponent() {
  return (
    <div>
      <ul>
        <li>Элемент 1</li>
        <li>
          Элемент 2
          <ul>
            <li>Элемент 2.1</li>
          </ul>
        </li>
        <li>Элемент 3</li>
        <li>Элемент 4</li>
      </ul>
      <ol>
        <li>Элемент 1</li>
        <li>
          Элемент 2
          <ol>
            <li>Элемент 2.1</li>
          </ol>
        </li>
        <li>Элемент 3</li>
        <li>Элемент 4</li>
      </ol>
    </div>
  );
}
export default ListsComponent;

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, onSelect }) {
  // function handleClick() {
  //   console.log('btn clicked');
  // }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

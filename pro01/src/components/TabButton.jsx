// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, onSelect, isSelected }) {
  // function handleClick() {
  //   console.log('btn clicked');
  // }

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

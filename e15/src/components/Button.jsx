
export default function Button({ children, mode='filled', Icon, ...props }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

	let cssClasses = `button ${mode}-button`;

	if (props.className) {
		cssClasses = cssClasses + ' ' + props.className;
	}

	if (Icon) {
		cssClasses = cssClasses + ' icon-button';
	}

  return (

	<button className={cssClasses} {...props}>
		{Icon && (
			<span className="button-icon"> <Icon></Icon></span>
		)}
		<span>{children}</span>
	</button>
    
  );
}

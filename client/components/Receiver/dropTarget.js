export const receiverTarget = {
	drop( props, monitor ) {
		const { dispatch, roundActions } = props;
		const item = monitor.getItem();

		// Delay until the next loop to allow the drop to process before we
		// change the state of the app based on it
		setTimeout( () => props.afterDrop(item.cardID, item.cardText), 50 );
	}
};

export function collect (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

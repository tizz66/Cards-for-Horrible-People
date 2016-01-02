export const receiverTarget = {
	drop( props, monitor ) {
		const { dispatch, roundActions } = props;
		let item = monitor.getItem();

		props.afterDrop(item.cardID, item.cardText);
	}
};

export function collect (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}
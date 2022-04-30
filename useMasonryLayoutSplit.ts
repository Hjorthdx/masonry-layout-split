export interface Column<T> {
	number: number;
	height: number;
	items: T[];
}

export default function useMasonryLayoutSplit<T>(items: T[], numberOfColumns: number, calculateHeight: (item: T) => number) {
	const columns: Column<T>[] = [];
	for (let index = 0; index < numberOfColumns; index++) {
		columns.push({ number: index, height: 0, items: [] });
	}

	items.map((item) => {
		const shortestColumn = columns.reduce((column1, column2) => {
			if (column1.height === column2.height) {
				return column1.number < column2.number ? column1 : column2;
			} else {
				return column1.height < column2.height ? column1 : column2;
			}
		});
		shortestColumn.items.push(item);
		shortestColumn.height = shortestColumn.height + calculateHeight(item);
	});
	return columns;
}

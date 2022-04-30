import { View, Text } from 'react-native';
import useMasonryLayoutSplit from './useMasonryLayoutSplit';

interface Person {
	name: string;
	age: number;
	interests?: string[];
}

export default function app() {
	const data: Person[] = [
		{ name: 'person 1', age: 1, interests: ['partying', 'clubbing', 'social gatherings'] },
		{ name: 'person 2', age: 2 },
		{ name: 'person 3', age: 3, interests: ['snowman building', 'baking', 'competive rock paper scissor'] },
		{ name: 'person 4', age: 4 },
		{ name: 'person 5', age: 5 },
	];

	function getEstimatedHeight(person: Person) {
		return person.name.length + person.age + (person.interests ? person.interests.length : 0);
	}

	const columns = useMasonryLayoutSplit(data, 2, getEstimatedHeight);

	return (
		<View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
			{columns.map((column, index) => {
				return (
					<View key={index} style={{ width: '50%' }}>
						{column.items.map((item, index) => {
							return (
								<View key={index} style={{ backgroundColor: 'lightgrey', margin: '1%' }}>
									<Text>Name: {item.name}</Text>
									<Text>Age: {item.age}</Text>
									{item.interests && (
										<Text>
											Interests:{'\n - '}
											{item.interests.join('\n - ')}
										</Text>
									)}
								</View>
							);
						})}
					</View>
				);
			})}
		</View>
	);
}

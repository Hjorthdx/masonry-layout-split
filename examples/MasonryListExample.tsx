import { View, Text } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

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

	const renderItem = ({ item }: { item: Person; index?: number }) => {
		return (
			<View style={{ backgroundColor: 'lightgrey', margin: '1%' }}>
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
	};

	return <MasonryList style={{ marginTop: 20 }} data={data} numColumns={2} renderItem={renderItem} />;
}

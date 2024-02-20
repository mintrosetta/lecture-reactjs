export default function Fruits() {
    // const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pine Apple'];
    const fruits = [
        { name: 'Apple', price: 10, emoji: '🍎' },
        { name: 'Mango', price: 15, emoji: '🥭' },
        { name: 'Banana', price: 12, emoji: '🍌' },
        { name: 'Orange', price: 13, emoji: '🍊' },
        { name: 'Pineapple', price: 7, emoji: '🍍' }
    ];

    return (
        <ul>
            {fruits.map((item, index) => <li key={index}>{item.emoji} {item.name} {`$${item.price}`}</li>)}
        </ul>
    );
}
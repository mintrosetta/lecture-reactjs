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

    // https://www.youtube.com/watch?v=8AY4siDB3ow&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=15
}
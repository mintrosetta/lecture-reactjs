export default function Fruits() {
    const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pine Apple'];

    return (
        <ul>
            {fruits.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
}
function Hello(props) { // props is value pass to into component
    // destructoring object, แยกโครงสร้างของ object ออกมาเป็นตัวแปร
    const { person } = props; 

    // return only one single root element
    return (
        <h1>{person.name} {person.message} {person.emoji}</h1>
    );
}

export default Hello;
// https://www.youtube.com/watch?v=n5WWqx8a4tg&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=10


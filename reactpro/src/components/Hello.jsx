function Hello(props) { // props is value pass to into component
    // destructoring object, แยกโครงสร้างของ object ออกมาเป็นตัวแปร
    const { name, message, emoji } = props; 
    props.name = 'ddd';

    // return only one single root element
    return (
        <h1>{props.message} {props.emoji} {props.name}</h1>
    );
}

export default Hello;
// https://www.youtube.com/watch?v=n5WWqx8a4tg&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=10


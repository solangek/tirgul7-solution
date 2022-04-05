
export default function History(props) {
    // display the array history as a list
    return (
        <div>
            <h3>History</h3>
            <ul>
                {props.history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
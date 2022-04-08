export default function Die(props) {
    const styles = {
        backgroundColor: props.value.isHeld ? '#59E391' : 'white'
    }
    return (
        <button onClick={()=> props.holdDice(props.value.id)} className="die-btn" style={styles}>{props.value.value}</button>
    )
}
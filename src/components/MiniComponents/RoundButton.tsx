import '../../css/RoundButton.css'
export default function RoundButton({ onClick, text }: { onClick? : React.MouseEventHandler, text: string }) {
    return <button onClick={onClick}>{text}</button>
}
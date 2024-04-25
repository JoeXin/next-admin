type InputProps = {
    type: string;
};
const Input = (props: InputProps) => {
    return <input type={ props.type }></input>
}
export default Input
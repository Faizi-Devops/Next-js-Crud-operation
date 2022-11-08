type B ={
    data:string,
    action:()=>void
}
const Button = (props:B)=>{
    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={props.action}>{props.data}</button>


        </div>
    )
}
export default Button;
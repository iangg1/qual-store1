export const FunkoM = (props) => {
    return (
        <>
        <img src={props.image} alt="" width="300px" />
        <h2>{props.name}</h2>
        <p>Type: {props.type} </p>
        <p>Serie: {props.serie} </p>
        <p>Price: {props.precio}</p>
       </>
    );
}

export const FunkoM = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <p>Tipo: {props.type} </p>
        <p>Serie: {props.serie} </p>
        <img src={props.image} alt="" width="300px" />
       </>
    );
}

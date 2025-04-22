
function Footer(props){
    console.log(props);
    
    return (
        <>
            <h4>This is the footer</h4>
            {props.children}
        </>
    )
}

export default Footer;
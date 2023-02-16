
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function header({sendChois}) {
    return (
        <ButtonGroup  size="lg">
        <Button onClick={()=>sendChois("chois 1")}>chois 1</Button>
        <Button onClick={()=>sendChois("chois 2")}>chois 2</Button>
        <Button onClick={()=>sendChois("chois 3")}>chois 3</Button>
        <Button onClick={()=>sendChois("chois 4")}>chois 4</Button>
        <Button onClick={()=>sendChois("chois 5")}>chois 5</Button>
        <Button onClick={()=>sendChois("chois 6")}>chois 6</Button>
        <Button onClick={()=>sendChois("chois 7")}>chois 7</Button>
       
  
        
  
        
      </ButtonGroup>
    );
  }
  
  export default header;
  
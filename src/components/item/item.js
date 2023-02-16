import Card from 'react-bootstrap/Card';
function item() {
    return (
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>



       
    );
  }
  
  export default item;
  
import { useEffect, useState } from "react"
import { Form, Button } from 'react-bootstrap'

const CompoundInterest = () => {
    const [NewValues, setNewValues] = useState({amount: '', })

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return(
        <div className="interest" onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-2" controlId="fromAmount">
                    <Form.Label>Summa: </Form.Label>
                    <Form.Control
                        placeholder="Esim. 10 000"
                        name="Amount"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tuotto: </Form.Label>
                    <Form.Control
                        placeholder="Tuotto %"
                        name="Return"
                    />
                </Form.Group>
                <Button type="button">Laske</Button>
            </Form>
        </div>
    )
}

export default CompoundInterest
import React from "react";
import Card from "react-bootstrap/Card"
import code from "./code.jpeg"

function GitHubCard() {
    return (
        <div className="card">
            <Card>
                <Card.Img variant="top" src={code} />
                <Card.Body>
                    <Card.Title>Leonel Alanis</Card.Title>
                    <Card.Text>
                        I am a Full Stack developer!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard
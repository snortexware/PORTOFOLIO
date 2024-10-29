import { Container, Card, Row, Text, Grid, Spacer } from "@nextui-org/react";

export default function Cards() {
  return (
    <Container gap={0}>
      <Row gap={1}>
        <Grid xs={6}>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 2
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Grid xs={4}>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 3
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Row>
    </Container>
  );
}

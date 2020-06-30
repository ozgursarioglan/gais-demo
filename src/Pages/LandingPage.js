import React, {Component} from 'react';
import Chart1 from "../Charts/Chart1";
import Chart2 from "../Charts/Chart2";
import Chart3 from "../Charts/Chart3";
import Chart4 from "../Charts/Chart4";
import Chart5 from "../Charts/Chart5";
import { Grid, Segment, Header, Image, Table } from 'semantic-ui-react'


class LandingPage extends Component {
    render() {
        return (
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header attached="top" as="h4">
                                DC Server Yük
                            </Header>
                            <Segment attached="bottom">
                                <Chart1/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header attached="top" as="h4">
                                Terminal Server Yük
                            </Header>
                            <Segment attached="bottom">
                                <Chart2/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header attached="top" as="h4">
                                Uygulama Server Yük
                            </Header>
                            <Segment attached="bottom">
                                <Chart3/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header attached="top" as="h4">
                                Database Server Yük
                            </Header>
                            <Segment attached="bottom">
                                <Chart3/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Column width={8}>
                        <Header attached="top" as="h4">
                            Terminal Server Yük
                        </Header>
                        <Segment attached="bottom">
                            <Table basic='very' celled collapsing>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sanal Sunucu</Table.HeaderCell>
                                        <Table.HeaderCell>Ip Adresi</Table.HeaderCell>
                                        <Table.HeaderCell>Os</Table.HeaderCell>
                                        <Table.HeaderCell>Ram</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Image src='https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/microsoft-512.png' rounded size='mini' />
                                                <Header.Content>
                                                    AX 2019
                                                    <Header.Subheader>ERP Server</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>192.168.15.9</Table.Cell>
                                        <Table.Cell>Windows Server 2016</Table.Cell>
                                        <Table.Cell>40 GB</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Image src='https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/microsoft-512.png' rounded size='mini' />
                                                <Header.Content>
                                                    Logo Resmi Sunucu
                                                    <Header.Subheader>Muhasebe Programı</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>192.168.15.23</Table.Cell>
                                        <Table.Cell>Windows Server 2012</Table.Cell>
                                        <Table.Cell>24 GB</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Image src='https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/microsoft-512.png' rounded size='mini' />
                                                <Header.Content>
                                                    Test 2008
                                                    <Header.Subheader>Test Sever</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>192.168.15.12</Table.Cell>
                                        <Table.Cell>Windows Server 2008</Table.Cell>
                                        <Table.Cell>12 GB</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h4' image>
                                                <Image src='https://i.pinimg.com/originals/a6/a3/35/a6a3352c15c9b12d6bd6eb5baf63b26c.png' rounded size='mini' />
                                                <Header.Content>
                                                    SAP Sunucu
                                                    <Header.Subheader>İnsan Kaynakları</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>192.168.15.21</Table.Cell>
                                        <Table.Cell>Ubuntu 16 Server</Table.Cell>
                                        <Table.Cell>40 GB</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Header attached="top" as="h4">
                                Terminal Server Yük
                            </Header>
                            <Segment attached="bottom">
                                <Chart4/>
                            </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header attached="top" as="h4">
                            Terminal Server Yük
                        </Header>
                        <Segment attached="bottom">
                            <Chart5/>
                        </Segment>
                    </Grid.Column>
                </Grid>
        );
    }
}

export default LandingPage;